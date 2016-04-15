export default function() {
 this.transition(
 	this.fromRoute('loading'),
 	this.toRoute('index'),
    this.use('fade', {duration: 1700}),
    this.debug()
 );
}