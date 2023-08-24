const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('cold drinks'), 2000);
});

async function createPost(postData) {
    try {
        const response = await fetch('post-api-url', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
}

async function deletePost(postId) {
    try {
        const response = await fetch(`post-api-url/${postId}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
}

const preMovie = async () => {
    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => {
        setTimeout(() => resolve('popcorn'), 3000);
    });

    const addButter = new Promise((resolve, reject) => {
        setTimeout(() => resolve('butter'), 3000);
    });

    let ticket = await person3PromiseToShowTicketWhenWifeArrives;
    console.log(`got the ${ticket}`);
    console.log(`Husband: we should go in now`);
    console.log(`Wife: "i am hungry"`);

    let popcorn = await getPopcorn;
    console.log(`Husband: here is ${popcorn}`);
    console.log(`Husband: we should go in now`);
    console.log(`Wife: "I dont like popcorn without butter!"`);

    let butter = await addButter;
    console.log(`added ${butter}`);

    let drinks = await getColdDrinks;
    console.log(`got ${drinks}`);

    console.log(`Husband: Anything else darling`);
    console.log(`Wife: lets go we are going to miss the preivew`);
    console.log(`Husband: thanks for the reminder *grin*`);

    return ticket;
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
