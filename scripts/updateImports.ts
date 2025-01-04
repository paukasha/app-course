import { Project } from 'ts-morph';

const project = new Project({});

// добавляем файлы с исходным кдом с которыми будем работать
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// получаем все ts/tsx файлы
const files = project.getSourceFiles();

// добавить алиас  только к файлам которые имеют абсолютный путь
function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
    return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        // value - путь из импорта, пример 'shared/ui/Code/Code';
        const value = importDeclaration.getModuleSpecifierValue();
        if (isAbsolute(value)) {
            // устанавливаем алиас
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

// применяем изменения
project.save();
