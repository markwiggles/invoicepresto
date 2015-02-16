export default function() {
    this.transition(
        this.fromRoute('index'),
        this.toRoute('billers.index'),
        this.use('toLeft', {
            duration: 500
        }),
        this.reverse('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.fromRoute('billers.index'),
        this.toRoute('debtors.index'),
        this.use('toLeft', {
            duration: 500
        }),
        this.reverse('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.fromRoute('debtors.index'),
        this.toRoute('items.index'),
        this.use('toLeft', {
            duration: 500
        }),
        this.reverse('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.fromRoute('items.index'),
        this.toRoute('tax.index'),
        this.use('toLeft', {
            duration: 500
        }),
        this.reverse('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.fromRoute('tax.index'),
        this.toRoute('freight.index'),
        this.use('toLeft', {
            duration: 500
        }),
        this.reverse('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.fromRoute('freight.index'),
        this.toRoute('bank-details.index'),
        this.use('toLeft', {
            duration: 500
        }),
        this.reverse('toRight', {
            duration: 500
        })
    );

}
