interface CertificateDetails {
    SubjectCN: string;
    IssuerCN: string;
    ValidFrom: string;
    ValidTill: string;
  }
  
  class UploadPage {
    visit(): void {
      cy.visit('https://js-55fbfg.stackblitz.io/');
    }
  
    clickRunThisProject(): void {
      cy.contains('Run this project').click();
    }
  
    clickAddButton(): void {
      cy.contains('Добавить').should('be.visible').click();
    }
  
    uploadFile(filePath: string): void {
      cy.get('.dropbox.ng-isolate-scope').should('be.visible');
      cy.get('.dropbox.ng-isolate-scope').selectFile(filePath, {
        action: 'drag-drop'
      });
    }
  
    verifyCertificateDetails(details: CertificateDetails): void {
      Object.entries(details).forEach(([key, value]) => {
        cy.get(`th:contains("${key}")`).closest('tr').find('.ng-binding').should('have.text', value);
      });
    }
  
    verifyNameInList(name: string): void {
      cy.get('a.list-group-item.list-group-item-action.ng-binding.ng-scope.active')
        .should('contain.text', name);
    }
  }
  
  export default UploadPage;
  