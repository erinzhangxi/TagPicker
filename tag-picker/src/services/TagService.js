import jsonData from './../tags.json'

let _singleton = Symbol();

// const TAG_API_URL =
//     'http://localhost:8080/api/tags';
//

export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }

    // this is currently hardcoded to read from json file
    // this should be changed to read from server

    findAllTags() {
        return jsonData;
    }
}