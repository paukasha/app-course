import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

// добавляем файлы с исходным кдом с которыми будем работать
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// получаем все ts/tsx файлы
const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUIDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUIDirectory?.getDirectories();

// добавить алиас  только к файлам которые имеют абсолютный путь
function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
    return layers.some((layer) => value.startsWith(layer));
}

componentsDirs?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);

    if (!indexFile) {
        const sourceCode = `export * from './${directory.getBaseName()}';`;
        const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });

        file.save();
    }
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split('/');

        const isSharedLayer = segments?.[0] === 'shared';
        const isUiLayer = segments?.[1] === 'ui';

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiLayer) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

// применяем изменения
project.save();
