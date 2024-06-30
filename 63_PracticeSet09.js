
// #####----- JavaScript Practice Set 09 --------------------------------------------------------------------------------------------------------------#####

// Solution
const toDo = async (falg,para) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (falg == true) {
                resolve("Work is done succesfully. " + para);
            } else {
                reject("Work is failed. "  + para);     
            }
        },2000);
    })
}

// Do A task using promise and then
const wOne = toDo(true, 'Task One')
wOne.then((value) => {
    console.log(value)
})

// Do A task using async await function
const wTwo = async() => {
    console.log(new Date().getMilliseconds())
    let resp = await toDo(true, 'Task Two')
    console.log(resp)
    console.log(new Date().getMilliseconds())
}
wTwo();

// Reject a promise with error and handle using try catch
let wThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                reject(new Error("Please this is not acceptable"))
        }, 3000)
    })
}

let wFour = async () => {
    try {
        let resp = await wThree()
        console.log(resp)
    }
    catch (err) {
        console.log("This error has been handled")
    }
}
wFour()

// Compare 3 Promise exec tim using ansync await and Promise.all

let p1 = async () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(10)
            }, 2000)
    })
}
let p2 = async () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(20)
            }, 1000)
    })
}
let p3 = async () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(30)
            }, 3000)
    })
}

// using async await
const run = async () => {
    console.time("run")
    let a1 = await p1() 
    let a2 = await p2() 
    let a3 = await p3() 
    console.log(a1, a2, a3)
    console.timeEnd("run")
}
run()
// using async await
const run2 = async () => {
    console.time("run1")

    let a1 = p1() 
    let a2 = p2() 
    let a3 = p3()
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3)
    //console.log(a1, a2, a3)
    console.timeEnd("run1")
}
run2()


