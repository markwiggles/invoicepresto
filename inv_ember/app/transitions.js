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
        this.toRoute('debtors'),
        this.use('toLeft', {
            duration: 500
        }),
        this.reverse('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.fromRoute('debtors'),
        this.toRoute('items'),
        this.use('toLeft', {
            duration: 500
        }),
        this.reverse('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.fromRoute('items'),
        this.toRoute('tax'),
        this.use('toLeft', {
            duration: 500
        }),
        this.reverse('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.fromRoute('tax'),
        this.toRoute('freight'),
        this.use('toLeft', {
            duration: 500
        }),
        this.reverse('toRight', {
            duration: 500
        })
    );
    this.transition(
        this.fromRoute('freight'),
        this.toRoute('bank-details'),
        this.use('toLeft', {
            duration: 500
        }),
        this.reverse('toRight', {
            duration: 500
        })
    );

}
