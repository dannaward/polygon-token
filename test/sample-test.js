const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter"); // i) compile, ii) abi (명세 등장)
    // const greeter = await Greeter.deploy("Hello, world!"); 
    // await greeter.deployed();
    const greeter = await Greeter.attach("0xa552723db2208B504da0CF795d279109Dd19A2f3");

    expect(await greeter.greet()).to.equal("Hola, mundo!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
