const { resumeData } = require("../templates/resumeData");
test('resume type contains summary', () => {
    expect(resumeType).toHaveProperty('summary');
  });