"use strict";
const { bootstrap } = require("./bootstrap");

describe("test text replacer extension with react app", () => {
  let extPage, appPage, browser;

  beforeAll(async () => {
    const context = await bootstrap({
      appUrl: "http://localhost:3000" /*, slowMo: 50, devtools: true*/,
    });

    extPage = context.extPage;
    appPage = context.appPage;
    browser = context.browser;
  });

  it("should render a button in the web application", async () => {
    //button Import exists account
    const importExistsAcountBtn = await extPage.$(".btn-block:nth-child(5)");
    await importExistsAcountBtn.click();

    // const mnemonicWordInput = await extPage.$(
    //   "input#input-3e771990.form-control-alternative.mnemonic-word-2MRgQjQymFPecHj7k4DObI.input-3D4RiQgfsq6CVDibN-Ssyh.form-control"
    // );
    const mnemonicWordInput1 = await extPage.$(
      ".mnemonic-word-container-1RmztzrkGoAxhL0xjcxz9y:nth-child(1) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await mnemonicWordInput1.type("burden");

    const mnemonicWordInput2 = await extPage.$(
      ".mnemonic-word-container-1RmztzrkGoAxhL0xjcxz9y:nth-child(2) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await mnemonicWordInput2.type("alley");

    const mnemonicWordInput3 = await extPage.$(
      ".mnemonic-word-container-1RmztzrkGoAxhL0xjcxz9y:nth-child(3) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await mnemonicWordInput3.type("test");

    const mnemonicWordInput4 = await extPage.$(
      ".mnemonic-word-container-1RmztzrkGoAxhL0xjcxz9y:nth-child(4) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await mnemonicWordInput4.type("mad");

    const mnemonicWordInput5 = await extPage.$(
      ".mnemonic-word-container-1RmztzrkGoAxhL0xjcxz9y:nth-child(5) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await mnemonicWordInput5.type("mind");

    const mnemonicWordInput6 = await extPage.$(
      ".mnemonic-word-container-1RmztzrkGoAxhL0xjcxz9y:nth-child(6) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await mnemonicWordInput6.type("dry");

    const mnemonicWordInput7 = await extPage.$(
      ".mnemonic-word-container-1RmztzrkGoAxhL0xjcxz9y:nth-child(7) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await mnemonicWordInput7.type("cradle");

    const mnemonicWordInput8 = await extPage.$(
      ".mnemonic-word-container-1RmztzrkGoAxhL0xjcxz9y:nth-child(8) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await mnemonicWordInput8.type("busy");

    const mnemonicWordInput9 = await extPage.$(
      ".mnemonic-word-container-1RmztzrkGoAxhL0xjcxz9y:nth-child(9) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await mnemonicWordInput9.type("there");

    const mnemonicWordInput10 = await extPage.$(
      ".mnemonic-word-container-1RmztzrkGoAxhL0xjcxz9y:nth-child(10) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await mnemonicWordInput10.type("vast");

    const mnemonicWordInput11 = await extPage.$(
      ".mnemonic-word-container-1RmztzrkGoAxhL0xjcxz9y:nth-child(11) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await mnemonicWordInput11.type("mix");

    const mnemonicWordInput12 = await extPage.$(
      ".mnemonic-word-container-1RmztzrkGoAxhL0xjcxz9y:nth-child(12) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await mnemonicWordInput12.type("circle");

    const accountNameInput = await extPage.$(
      ".form-inner-container-1OFu9k06LiZAc8a8NY7ICA .form-group:nth-child(1) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await accountNameInput.type("test");

    const newPasswordInput = await extPage.$(
      ".form-inner-container-1OFu9k06LiZAc8a8NY7ICA .form-group:nth-child(2) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await newPasswordInput.type("12345678");

    const confirmPasswordInput = await extPage.$(
      ".form-inner-container-1OFu9k06LiZAc8a8NY7ICA .form-group:nth-child(3) .input-3D4RiQgfsq6CVDibN-Ssyh"
    );
    await confirmPasswordInput.type("12345678");

    const nextButton = await extPage.$(
      ".form-inner-container-1OFu9k06LiZAc8a8NY7ICA .btn-block"
    );
    await nextButton.click();

    // 3. When the user goes to the chrome extension
    // await extPage.bringToFront();

    // 4. When the user writes the word "music" and its replacement "**TEST**"
    // in the extension and the user clicks on the "replace" button

    // const replaceBtn = await extPage.$(
    //   ".btn.btn-outline-primary.btn-lg.btn-block"
    // );

    // 1. When a user opens the React application
    // appPage.bringToFront();
    // 1.1. The user should see a button on the web page
    // const btn = await appPage.$(".action");
    // const btnText = await btn.evaluate((e) => e.innerText);
    // expect(btnText).toEqual("click to show text");
    // // 2. Then the user clicks the button to display the text
    // await btn.click();

    // 3. When the user goes to the chrome extension
    // await extPage.bringToFront();

    // 4. When the user writes the word "music" and its replacement "**TEST**"
    // in the extension and the user clicks on the "replace" button
    // const fromInput = await extPage.$("#from");
    // await fromInput.type("music");
    // const toInput = await extPage.$("#to");
    // await toInput.type("**TEST**");
    // const replaceBtn = await extPage.$("#replace");
    // const replaceBtn = await extPage.$(
    //   ".btn.btn-outline-primary.btn-lg.btn-block"
    // );
    // await replaceBtn.click();

    // // 5. When the user goes back to the website
    // appPage.bringToFront();
    // const textEl = await appPage.$(".text");
    // const text = await textEl.evaluate((e) => e.innerText);
    // // 5.1. Then the user should see the string "**TEST**" on the page
    // expect(text).toEqual(expect.stringContaining("**TEST**"));
    // // 5.2 Then the user should no longer see the string "music" on the page
    // expect(text).toEqual(expect.not.stringContaining("music"));
  });

  // afterAll(async () => {
  //   await browser.close();
  // });
});
