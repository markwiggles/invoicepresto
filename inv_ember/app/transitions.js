export default function() {
    this.transition(
        this.toRoute('index'),
        this.use('toLeft', {
            duration: 500
        })
    );

    this.transition(
        this.toRoute('billers.edit'),
        this.use('toUp', {
            duration: 500
        })
    );
    this.transition(
        this.toRoute('billers.index'),
        this.use('toRight', {
            duration: 500
        })
    );
        this.transition(
        this.toRoute('debtors.index'),
        this.use('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.toRoute('items.index'),
        this.use('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.toRoute('taxes.index'),
        this.use('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.toRoute('freights.index'),
        this.use('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.toRoute('bank-details.index'),
        this.use('toRight', {
            duration: 500
        })
    );
        this.transition(
        this.toRoute('invoice-numbers.index'),
        this.use('toRight', {
            duration: 500
        })
    );




}
