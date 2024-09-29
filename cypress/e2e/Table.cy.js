describe('Handle Tables',()=>{

    beforeEach('Login',()=>{

        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get("input[id='input-username']").clear().type("demo");
        cy.get("input[id='input-password']").clear().type("demo");
        cy.get("button[type='submit']").click();

       // cy.get(".btn-close").click();
        //Custokmers-->Customers

        cy.get("li[id='menu-customer']>a").click(); //customer main menu
        cy.get("li[id='menu-customer']>ul>li:first-child").click(); //customer sub/child item
        //cy.get("li[id='menu-customer']>ul>li").eq(0).click(); //customer sub/child item
    })

    it.skip('Check Number Rows & Columns',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','6');

    })

    it.skip('Check cell data from specific row & Column',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(8)")
        .contains("asd@email.com");

       // cy.get("table[class='table table-bordered table-hover']>tbody>tr").eq(7).contains("asd@email.com");
    })

    it.skip('Read al the rows & Columns data in the first page',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
          .each(  ($row, index, $rows)=>{

            cy.wrap($row).within( ()=>{

                cy.get("td").each( ($col, index, $cols)=>{

                    cy.log($col.text());
                })

            })


          } )
    })

    it('Pagination',()=>{

        //find total number of pages
    /*    let totalPages;
        cy.get("div[class='col-sm-6 text-end']").then( (e)=>{

           let mytext=e.text(); //Showing 6041 to 6050 of 6057 (606 Pages)
           totalPages=mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("Pages")-1    )   
           cy.log("Total number of pages in a table=====>"+totalPages)
        })*/

        let totalPages=5;

        for(let p=1;p<=totalPages;p++)
        {
            if(totalPages>1)
            {
                cy.log("Active page is======>"+p);

                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000);

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each( ($row, index, $rows)=>{

                    cy.wrap($row).within(  ()=>{

                        cy.get('td:nth-child(3)').then( (e)=>{
                            cy.log(e.text()); //Email
                        })
                    })
                })
            }
        }


    })

})