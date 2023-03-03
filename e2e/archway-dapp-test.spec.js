const { bootstrap } = require("./bootstrap");

/** Connect wallet flow */
describe("Test flow connect wallet with Keplr wallet extension", () => {
  let extPage, appPage, browser;

  beforeAll(async () => {
    const context = await bootstrap({
      appUrl: "http://localhost:3000/" /*, slowMo: 50, devtools: true*/,
    });

    extPage = context.extPage;
    appPage = context.appPage;
    browser = context.browser;
  });

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  it("should click button Import existing account", async () => {
    //button Import exists account
    const importExistsAccountButton = await extPage.$(
      ".btn-block:nth-child(5)"
    );
    await importExistsAccountButton.click();
  });

  it("should fill in information for 12 mnemonics word", async () => {
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
  });

  it("should fill in your account information", async () => {
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
  });

  it("should click button next for confirm", async () => {
    const nextButton = await extPage.$(
      ".form-inner-container-1OFu9k06LiZAc8a8NY7ICA .btn-block"
    );
    await nextButton.click();
  });

  it("should click button done to complete the test with the Keplr extension", async () => {
    const doneButton = await extPage.$(
      ".container-2r_sTVfDeimjo0VLAYOa4O .btn-block"
    );
    await doneButton.click();
    await appPage.bringToFront();
    await extPage.close();
  });

  it("should click button connect wallet", async () => {
    const connectWalletButton = await appPage.$(".btn-connect-wallet");
    await connectWalletButton.click();
  });

  it("should click button arch", async () => {
    await sleep(2000);
    const archBtn = await appPage.$(".btn-arch-wallet");
    await archBtn.click();
  });

  it("should click Approve button to accept request connection", async () => {
    await sleep(5000);
    const pageList = await browser.pages();
    const newPage = await pageList[pageList.length - 1];

    const approveButton = await newPage.$(
      ".buttons-2nWpBrAPFoUYGbfor3EQeg .btn-primary"
    );
    await approveButton.click();
  });

  it("should click Approve button to add Constantine Testnet", async () => {
    await sleep(5000);
    const pageList = await browser.pages();
    const newPage = await pageList[pageList.length - 1];

    const approveButton = await newPage.$(
      ".buttons-3kLWXpIpnbFout9JI1D6BJ .btn-primary"
    );
    await approveButton.click();
  });
  afterAll(async () => {
    await sleep(7000);
    await browser.close();
  });
});
