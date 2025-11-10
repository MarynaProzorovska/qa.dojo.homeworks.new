import { Page } from "@playwright/test";

export function getAllLocatorsCoffeeCart(page: Page) {
  const espressoMacchiato = page.getByText(
    "Espresso Macchiato $12.00espressomilk foam"
  );
  const checkout = page.locator('[data-test="checkout"]');
  const name = page.getByRole("textbox", { name: "Name" });
  const email = page.getByRole("textbox", { name: "Email" });
  const submitButton = page.getByRole("button", { name: "Submit" });
  const successfulPurchase = page.getByRole("button", {
    name: "Thanks for your purchase.",
  });
  const mocha = page.locator('[data-test="Mocha"]');
  const yesButton = page.getByRole("button", { name: "Yes, of course!" });
  const cappuccino = page.locator('[data-test="Cappuccino"]');
  const americano = page.locator('[data-test="Americano"]');
  const noButton = page.getByRole("button", { name: "Nah, I'll skip." });
  const cart = page.getByRole("listitem").filter({ hasText: "cart" });
  const removeOneCappuccinoButton = page.getByRole("button", {
    name: "Remove one Cappuccino",
  });
  const removeAllCappuccinoButton = page.getByRole("button", {
    name: "Remove all Cappuccino",
  });

  return {
    name,
    espressoMacchiato,
    checkout,
    email,
    submitButton,
    successfulPurchase,
    mocha,
    yesButton,
    cappuccino,
    americano,
    noButton,
    cart,
    removeOneCappuccinoButton,
    removeAllCappuccinoButton,
  };
}

export function getAllLocatorsConduit(page: Page) {
  const userName = page.getByRole("textbox", { name: "Username" });
  const email = page.getByRole("textbox", { name: "Email" });
  const password = page.getByRole("textbox", { name: "Password" });
  const signupButton = page.getByRole("button", { name: "Sign up" });
  const errorMessage1 = page.getByText("email is invalid");
  const errorMessage2 = page.getByText("username is already taken.");
  const errorMessage3 = page.getByText("email is already taken.");
  const signInButton = page.getByRole("button", { name: "Sign in" });
  const errorMessage4 = page.getByText("email or password is invalid");
  const homePage = page.locator(".home-page");
  const successfulLoginBanner = page.getByText(
    "A place to share your knowledge."
  );
  const newArticleButton = page.locator(".ion-compose");
  const articleTitle = page.getByPlaceholder("Article Title");
  const articleTheme = page.getByPlaceholder("What's this article about?");
  const articleBody = page.getByPlaceholder("Write your article (in markdown)");
  const articleTag = page.getByPlaceholder("Enter tags");
  const publishArticleButton = page.getByRole("button", {
    name: "Publish Article",
  });
  const existedArticle = page.locator(
    "//*[@class ='article-page']//*[@data-qa-id='article-title']"
  );
  const user = page.locator(
    "//*[@data-qa-id='site-nav']//*[@class = 'nav-item'][4]"
  );
  const conduitLinkToHomePage = page.locator(".navbar-brand");
  const article = page.locator(".preview-link [data-qa-type='preview-title']");

  return {
    userName,
    email,
    password,
    signupButton,
    errorMessage1,
    errorMessage2,
    errorMessage3,
    signInButton,
    errorMessage4,
    homePage,
    successfulLoginBanner,
    newArticleButton,
    articleTitle,
    articleTheme,
    articleBody,
    articleTag,
    publishArticleButton,
    existedArticle,
    user,
    conduitLinkToHomePage,
    article,
  };
}

export function getAllLocatorsQaPathCheckboxes(page: Page) {
  const expandAll = page.locator("//*[@class='rct-icon rct-icon-expand-all']");
  const desktopCheckboxLocator = page.locator(
    "//*[contains(@class, 'rct-title') and text()='Desktop'"
  );
  const workSpaceCheckboxLocator = page.locator(
    "//*[contains(@class, 'rct-title') and 'text='WorkSpace'"
  );
  const officeCheckboxLocator = page.locator(".rct-title:has-text('Office')");
  const downloadsCheckboxLocator = page.locator(
    "//*[contains(@class, 'rct-title') and text='Downloads'"
  );

  return {
    expandAll,
    desktopCheckboxLocator,
    workSpaceCheckboxLocator,
    officeCheckboxLocator,
    downloadsCheckboxLocator,
  };
}

export function getAllLocatorsQaPathForms(page: Page) {
  const userNameLocator = page.locator("//*[@id='userName']");
  const userEmailLocator = page.locator("//*[@id='userEmail']");
  const currentAddressLocator = page.locator("//*[@id='currentAddress']");
  const permanentAddressLocator = page.locator("//*[@id='permanentAddress']");
  const submitButtonLocator = page.locator("//*[@id='submit']");
  const responseName = page.locator("//*[@id='name']");
  const responseEmail = page.locator("//*[@id='email']");
  const responseCurrentAddress = page.locator(
    "//*[@id='output']//*[@id='currentAddress']"
  );
  const responsePermanentAddress = page.locator(
    "//*[@id='output']//*[@id='permanentAddress']"
  );

  return {
    userNameLocator,
    userEmailLocator,
    currentAddressLocator,
    permanentAddressLocator,
    submitButtonLocator,
    responseName,
    responseEmail,
    responseCurrentAddress,
    responsePermanentAddress,
  };
}

export function getAllLocatorsQaPathRadioButtons(page: Page) {
  const yesRadioLocator = page.locator("//*[@for='yesRadio']");
  const impressiveRadioLocator = page.locator("//*[@for='impressiveRadio']");
  const noRadioLocator = page.locator("//*[@for='noRadio']");
  const successTextLocator = page.locator("//*[@class='text-success']");

  return {
    yesRadioLocator,
    impressiveRadioLocator,
    noRadioLocator,
    successTextLocator,
  };
}

export function getAllLocatorsQaPathPracticeForm(page: Page) {
  const name = page.locator("#firstName");
  const lastName = page.locator("#lastName");
  const email = page.locator("#userEmail");
  const genderMale = page.locator('#gender-radio-1[value="Male"]');
  const genderFemale = page.locator('#gender-radio-2[value="Female"]');
  const genderOther = page.locator('#gender-radio-3[value="Other"]');
  const mobile = page.locator("#userNumber");
  const dateOfBirthInput = page.locator("#dateOfBirthInput");
  const subjects = page.locator("#subjectsInput");
  const hobbySport = page.locator("#hobbies-checkbox-1");
  const hobbyReading = page.locator("#hobbies-checkbox-2");
  const hobbyMusic = page.locator("#hobbies-checkbox-2");
  const currentAddress = page.locator("#currentAddress");
  const state = page.locator("#state");
  const stateExpandMenu = page.locator(".css-26l3qy-menu");
  const stateValueNCR = page.getByRole("option", { name: "NCR" });
  const cityNCRDelhi = page.getByText("Delhi", { exact: true });
  const cityNCRGurgaon = page.getByText("Gurgaon", { exact: true });
  const cityNCRNoida = page.getByText("Noida");
  const stateValueUttar = page.getByRole("option", { name: "Uttar Pradesh" });
  const cityUttarArga = page.getByText("Arga");
  const cityUttarLucknow = page.getByText("Lucknow");
  const cityUttarMerrut = page.getByText("Merrut");
  const stateValueHaryana = page.getByRole("option", { name: "Haryana" });
  const cityHaryanaKarnal = page.getByText("Karnal");
  const cityHaryanaPanipat = page.getByText("Panipat");
  const stateValueRajasthan = page.getByRole("option", {
    name: "Rajasthan",
  });
  const cityRajasthanJaipur = page.getByText("Jaipur");
  const cityRajasthanJaiselmer = page.getByText("Jaiselmer");
  const city = page.locator("#city");
  const submitButton = page.locator("#submit");

  return {
    name,
    lastName,
    email,
    genderMale,
    genderFemale,
    genderOther,
    mobile,
    dateOfBirthInput,
    subjects,
    hobbySport,
    hobbyReading,
    hobbyMusic,
    currentAddress,
    state,
    city,
    stateExpandMenu,
    stateValueNCR,
    stateValueUttar,
    stateValueHaryana,
    stateValueRajasthan,
    submitButton,
    cityNCRDelhi,
    cityNCRGurgaon,
    cityNCRNoida,
    cityUttarArga,
    cityUttarLucknow,
    cityUttarMerrut,
    cityHaryanaKarnal,
    cityHaryanaPanipat,
    cityRajasthanJaipur,
    cityRajasthanJaiselmer,
  };
}
