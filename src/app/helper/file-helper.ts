export class FileHelper {
    fileName: any;
    fileNames: any[];

    getFile(control: any): void {
        let file = control.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (e) => {
            this.fileName = reader.result;
        }
    }
    getFiles(control: any): void {
        Array.from(control.files).forEach((file: File) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = (e) => {
                this.fileNames.push(reader.result);
            }
        });
    }
}
