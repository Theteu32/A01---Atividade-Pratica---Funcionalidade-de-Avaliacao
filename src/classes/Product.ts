import { comments} from "../DB/comments";
import { rattings } from "../DB/ratings";
import { Base } from "./Base";
import { Comment } from "./Comment";
import { Rate, Ratting } from "./Rating";
import { User } from "./User";


export class Product extends Base{

    public name:string;
    public value:number;

    constructor(name:string, value:number) {
        super();
        this.name = name;
        this.value = value;
    };

    public show():string{

        this.showDetails()

        const resposta = `Nome do produto: ${this.name} | Valor do produto R$ ${this.value}`;

        console.log("\n---------------------\n");

        return resposta;
    };

    private showDetails():string{
        // Mostrar o produto
        // ex:
        // 1: Calca preta (R$ 300)
        // 2: | Avaliação média: 4.5 |
        // 3: [bruninha]: Muito bonita, preço bom
        //    [daphne]: Ficou grande

        // 1:
        console.log(`Nome do produto: ${this.name} | Valor do produto (R$${this.value})`);

        // 2:
        const reviews = rattings.filter(ratting => ratting.product === this)
        if (reviews.length != 0) {
            
            const sunReviews = reviews.reduce((previous, current) => previous + current.rate, 0)
            
            const averageReviews = sunReviews / reviews.length
            
            // Mostrar a média de avaliações
            console.log(`Avaliação média: ${averageReviews.toFixed(1)}`);
        }
        else{
            console.log(`Não existem avaliações`);
        }

        // 3:
        const comment = comments.filter(comments => comments.product === this)

        comment.forEach(element => {
            console.log(`[${element.user.username}]: ${element.content}`);
        });

        return""
    };

                                
    public comment(content:string, user: User):void{

        const comment = new Comment(content,this ,user);

        comments.push(comment);
    };

                            
    public rate(rate:Rate, user: User):void{

        const ratting = new Ratting(rate, this, user);

        rattings.push(ratting);
    };
};