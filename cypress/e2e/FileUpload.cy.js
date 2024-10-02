import 'cypress-file-upload'


describe('File Upload', () => {

    it('Single File Upload', () => {

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("input[id='file-upload']").attachFile('Test1.xlsx');
        cy.get("[type='submit']").click();
        cy.get("div[class='example']>h3").should('have.text', 'File Uploaded!')

    })


    it('File Upload - Rename', () => {

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("input[id='file-upload']").attachFile({ filePath: 'Test1.xlsx', fileName: 'myFile.xlsx' });
        cy.get("[type='submit']").click();
        cy.get("div[class='example']>h3").should('have.text', 'File Uploaded!')

    })

    it('File Upload - Drag and drop', () => {

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("div[id='drag-drop-upload']").attachFile('Test1.xlsx', { subjectType: 'drag-n-drop' });
        cy.get("div[class='dz-filename']>span").contains('Test1.xlsx');
        //cy.get("div[id='drag-drop-upload']").attachFile({filePath:"Test1.xlsx", fileName: "MyFile.xlsx"}, {subjectType:'drag-n-drop'});
        //cy.get("div[class='dz-filename']>span").contains("MyFile.xlsx");

    })

    it('Multiple File Upload', () => {

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("input[id='filesToUpload']").attachFile(['Test1.xlsx', 'Test2.xlsx']);
        cy.wait(3000);
        cy.get("ul[id='fileList']>li:nth-child(1)").should('have.text', 'Test1.xlsx');
        cy.get("ul[id='fileList']>li:nth-child(2)").should('have.text', 'Test2.xlsx');


    })

    it.only('File Upload - Shadow Dom', () => {

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get("input[class='smart-browse-input']", { includeShadowDom: true }).attachFile('Test1.xlsx');
        cy.wait(3000);
        cy.get("div[class='smart-file']>span", { includeShadowDom: true }).contains('Test1.xlsx');


    })

})