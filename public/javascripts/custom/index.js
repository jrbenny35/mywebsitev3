/**
 * Created by root on 9/30/15.
 */


$(function() {
    $('.gplus2').kycoGooglePlusFeed2({
        id: '105776773930659797989',
        feedPosts: 3, // Feed posts to show on load
        postsIncrement: 3, // Number of feed posts to show on "Show more" button click
        maxPosts: 3, // Max number of posts to pull before "Show more" will go to Google+, cannot excced 20 because of Google API in use
        profileImageSize: 75, // Max is 250
        orderBy: 'popularity',
        sort: 'asc',
        lang: 'en'
    });
});

