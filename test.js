// describe('A suite of basic functions',function() {
// 	var name;
// 	it('sayHello', function(){
// 		name = 'Conan';
// 		var exp = 'Hello Conan';
// 		expect(exp).toEqual(sayHello(name));
// 	});

// 	it('reverse word',function(){
// 		expect('DCBA').toEqual(reverse('ABCD'));
// 		expect('Conan').toEqual(reverse('nanoC'));
// 	})
// })

// describe('A suite of jasmine function', function () {

// 	it('reverse word',function(){
// 		expect('DCBA').toEqual(reverse('ABCD'));
// 		// expect('Conan').toEqual(reverse('nanoC'));
// 	})

// 	describe('expections', function () {

// 		var name;
// 	it('sayHello', function(){
// 		name = 'Conan';
// 		var exp = 'Hello Conan';
// 		expect(exp).toEqual(sayHello(name));
// 	});

// 		it('expections', function (){
// 			expect('AAA').toEqual('AAA');
// 			expect(52.78).toMatch(/\d*.\d\d/);
// 			expect(null).toBeNull();
// 			expect('ABCD').toContain('B');
// 			expect(52.78).toBeLessThan(99);
// 			expect(52.78).toBeGreaterThan(18);

// 			var x = true,y;
// 			expect(x).toBe(true);
// 			expect(x).toBeDefined();
// 			expect(y).toBeUndefined();
// 			expect(x).toBeTruthy();
// 			expect(!x).toBeFalsy();

// 			var fun = function () { return a +1 };
// 			expect(fun).toThrow();
// 		})

// 	})

// });

// describe('setup and teardow',function(){

// 	var foo;
	
// 	beforeEach(function(){
// 		foo = 0;
// 		foo += 1;
// 	});

// 	afterEach(function(){
// 		foo = 0;
// 	});

// 	it('is just afunction',function(){
// 		expect(foo).toEqual(1);
// 	});

// 	it('can have more ',function(){
// 		expect(foo).toEqual(1);
// 		expect(true).toEqual(true);
// 	})

// });

// describe('asyn',function () {

// 	var value, flag;
// 	it('异步支持', function () {
// 		done( function () {
// 			flag = false;
// 			value = 0;
// 			setTimeout( function () {
// 				flag = true;
// 			} )
// 		});
// 		done(function(){
// 			value ++ ;
// 			return flag;
// 		}, 'the value shoud be increameted' , 750);

// 		done( function () {
// 			expect(value).toBeGreaterThan(0);
// 		} )
// 	})

// })

describe('A suite of basic functions',function (){
	it('reverse word',function(){
		expect('DCBA').toEqual(reverse('ABCD'));
		expect("Conan").toEqual(reverse("na3232323no"));
	});
} )