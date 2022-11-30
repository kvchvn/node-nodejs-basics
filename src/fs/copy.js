import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir, readdir, copyFile, constants } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const srcDir = join(__dirname, 'files');
    const destDir = join(__dirname, 'files_copy');

    const copyFilesRecursively = async (srcDir, destDir) => {
        try {
            await mkdir(destDir);
            const srcDirents = await readdir(srcDir, { withFileTypes: true });

            srcDirents.forEach(async (dirent) => {
                if (dirent.isDirectory()) {
                    const srcSubDir = join(srcDir, dirent.name);
                    const destSubDir = join(destDir, dirent.name);

                    await copyFilesRecursively(srcSubDir, destSubDir);
                } else {
                    const filename = dirent.name;
                    const srcPath = join(srcDir, filename);
                    const destPath = join(destDir, filename);

                    await copyFile(srcPath, destPath, constants.COPYFILE_EXCL);
                }
            });
        } catch {
           throw new Error('FS operation failed');
        }
    };

    await copyFilesRecursively(srcDir, destDir);
};

copy();