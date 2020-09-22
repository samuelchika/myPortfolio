import ElementCreate from './utilities/ElementCreate.js';
class Bio {
    constructor(bio) {
        this.bioData = bio;
    }
    //get the necessary html element we need
    getName() {
        //this is a h1 tag with 2 span inside having the name of the user.
        //first name carries a color of text-white, and the other text-dark
        const h1 = new ElementCreate('H1');
        h1.setClasses(['font-b', 'text-white', 'font-weight-bold']);
        const spanB = new ElementCreate('SPAN');
        spanB.setClass('text-success');
        const fullName = this.bioData.name.trim();
        let names = [];
        if (fullName !== "") {
            if (fullName.search(" ") != -1) {
                names = fullName.split(" ");
            }
        }
        //name have been successfully splited
        if (names !== []) {
            //more than one name was set.
            h1.setElementText(names[0].concat(" "));
            names = names.slice(1);
            spanB.setElementText(names.join(" "));
            h1.setChildren([spanB.getElement()]);
        }
        else {
            h1.setElementText(fullName);
        }
        //return h1
        return h1.getElement();
    }
    getSummary() {
        //a brief description of the person
        const p = new ElementCreate('p');
        const marquee = new ElementCreate("marquee");
        p.setClasses(['font-italic', 'my-3', 'bg-white', 'p-2', 'text-secondary']);
        p.setId('briefDetail');
        marquee.setElementText(this.bioData.summary);
        p.setChild(marquee.getElement());
        return p.getElement();
    }
    getHireable() {
        const h3 = new ElementCreate('H3');
        const span = new ElementCreate("SPAN");
        const i = new ElementCreate("I");
        h3.setClass('col-12');
        h3.setElementText('Hireable: ');
        span.setClasses(['text-white', 'font-small']);
        if (this.bioData.hireable) {
            i.setClasses(['fa', 'fa-check-circle']);
        }
        else {
            i.setClasses(['fa', 'fa-ban']);
        }
        span.setChild(i.getElement());
        h3.setChild(span.getElement());
        return h3.getElement();
    }
    getAvailiablity() {
        const h3 = new ElementCreate('H3');
        const span = new ElementCreate("SPAN");
        h3.setClass('col-12');
        h3.setElementText('Availability: ');
        span.setClasses(['text-white', 'font-small']);
        span.setElementText(this.bioData.availability);
        h3.setChild(span.getElement());
        return h3.getElement();
    }
    getEmail() {
        const h3 = new ElementCreate('H3');
        const a = new ElementCreate("A");
        const span = new ElementCreate("SPAN");
        const i = new ElementCreate("I");
        //set classes and attributes of each HTML Element created
        h3.setClass('col-12');
        h3.setElementText('Mobile: ');
        a.setAttribute({ name: "href", value: `mailto:${this.bioData.email}?subject:From%20my%20Portfolio` });
        span.setClasses(['text-white', 'font-mid', "my-auto", "text-shadow-success"]);
        i.setClasses(['fa', 'fa-envelope']);
        span.setChild(i.getElement());
        a.setChild(span.getElement());
        h3.setChild(a.getElement());
        return h3.getElement();
    }
    getMobile() {
        const h3 = new ElementCreate('H3');
        const a = new ElementCreate("A");
        const span = new ElementCreate("SPAN");
        //set classes and attributes of each HTML Element created
        h3.setClass('col-12');
        h3.setElementText('Mobile: ');
        a.setAttribute({ name: "href", value: `tel:+${this.bioData.phone}` });
        span.setClasses(['text-light', 'font-small', 'text-shadow-success']);
        span.setElementText(`+${this.bioData.phone}`);
        a.setChild(span.getElement());
        h3.setChild(a.getElement());
        return h3.getElement();
    }
    getAddress() {
        const h3 = new ElementCreate('H3');
        const span = new ElementCreate("SPAN");
        h3.setClass('col-12');
        h3.setElementText('Address: ');
        span.setClasses(['text-white', 'font-small']);
        span.setElementText(this.bioData.address);
        h3.setChild(span.getElement());
        return h3.getElement();
    }
    getEirCode() {
        const h3 = new ElementCreate('H3');
        const span = new ElementCreate("SPAN");
        h3.setClass('col-12');
        h3.setElementText('EIRCODE: ');
        span.setClasses(['text-white', 'font-small']);
        span.setElementText(this.bioData.eircode);
        h3.setChild(span.getElement());
        return h3.getElement();
    }
    getProfile() {
        const p = new ElementCreate("P");
        p.setId('litBio');
        p.setClass('text-justify');
        p.setElementText(this.bioData.profile);
        p.setChild(this.getProfileSummary());
        return p.getElement();
    }
    getProfileSummary() {
        const ul = new ElementCreate("UL");
        ul.setClasses(['list-circle', 'ml-3', 'text-white']);
        this.bioData.profileSummary.forEach(sum => {
            const li = new ElementCreate("LI");
            li.setElementText(sum);
            ul.setChild(li.getElement());
        });
        return ul.getElement();
    }
    getBioData() {
        const div = new ElementCreate("div");
        div.setClasses(["my-3", "p-3", "container", "mx-auto"]);
        div.setId("jumCont");
        const divBio = new ElementCreate("div");
        divBio.setClasses(["row", "my-3", "text-left", "text-dark"]);
        divBio.setChildren([
            this.getHireable(),
            this.getAvailiablity(),
            this.getMobile(),
            this.getAddress(),
            this.getEirCode(),
            this.getEmail(),
        ]);
        div.setChildren([
            this.getName(),
            this.getSummary(),
            divBio.getElement(),
            this.getProfile(),
        ]);
        return div.getElement();
    }
}
export default Bio;
