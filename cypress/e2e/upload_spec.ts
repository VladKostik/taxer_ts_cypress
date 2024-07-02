
import UploadPage from '../support/pages/UploadPage';

describe('Upload certificate to dropbox', () => {
  const uploadPage = new UploadPage();

  before(() => {
    uploadPage.visit();
  });

  it('should run the project, than upload a file by dragging it to the dropbox and verify certificate details', () => {
    
    uploadPage.clickRunThisProject();
    uploadPage.clickAddButton();
    uploadPage.uploadFile('cypress/fixtures/cert.cer');
    
    const certificateDetails = {
      SubjectCN: 'Таксер Тест Тестерович',
      IssuerCN: 'UA-22723472',
      ValidFrom: '2015-04-08 21:00:00 UTC',
      ValidTill: '2017-04-08 21:00:00 UTC'
    };

    uploadPage.verifyCertificateDetails(certificateDetails);
    uploadPage.verifyNameInList('Таксер Тест Тестерович');
  });
});
