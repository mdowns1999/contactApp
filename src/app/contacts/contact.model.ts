export class Contact{

    public id: string;
    public name: string;
    public email: string;
    public phone: string;
    public imageUrl: string;
    public group: any;

    // Contact[]
    constructor(id: string, name: string, email: string, phone: string, image: string, group: any){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.imageUrl = image;
        this.group = group;
    }
}

