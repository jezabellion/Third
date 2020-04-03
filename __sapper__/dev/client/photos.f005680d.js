import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, n as noop } from './client.81b09a0b.js';

/* src/routes/photos.svelte generated by Svelte v3.20.1 */

function create_fragment(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let photos1 = [
		{ src: "images/aaa.jpg", alt: "whatever" },
		{ src: "images/bbb.jpg", alt: "yup" },
		{ src: "images/ccc.jpg", alt: "new" }
	];

	let photos2 = [
		{ src: "images/ddd.jpg", alt: "stuff" },
		{ src: "images/eee.jpg", alt: "shit" },
		{ src: "images/fff.jpg", alt: "nothing" }
	];

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Photos> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Photos", $$slots, []);
	$$self.$capture_state = () => ({ photos1, photos2 });

	$$self.$inject_state = $$props => {
		if ("photos1" in $$props) photos1 = $$props.photos1;
		if ("photos2" in $$props) photos2 = $$props.photos2;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [];
}

class Photos extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Photos",
			options,
			id: create_fragment.name
		});
	}
}

export default Photos;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9zLmYwMDU2ODBkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Bob3Rvcy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0bGV0IHBob3RvczEgPSBbXG5cdFx0eyBzcmM6ICdpbWFnZXMvYWFhLmpwZycsIGFsdDogJ3doYXRldmVyJyB9LFxuXHRcdHsgc3JjOiAnaW1hZ2VzL2JiYi5qcGcnLCBhbHQ6ICd5dXAnIH0sXG5cdFx0eyBzcmM6ICdpbWFnZXMvY2NjLmpwZycsIGFsdDogJ25ldycgfVxuXHRdO1xuICBsZXQgcGhvdG9zMiA9IFtcbiAgICB7IHNyYzogJ2ltYWdlcy9kZGQuanBnJywgYWx0OiAnc3R1ZmYnIH0sXG4gICAgeyBzcmM6ICdpbWFnZXMvZWVlLmpwZycsIGFsdDogJ3NoaXQnIH0sXG4gICAgeyBzcmM6ICdpbWFnZXMvZmZmLmpwZycsIGFsdDogJ25vdGhpbmcnIH1cblx0XTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUNLLE9BQU87SUFDUixHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLFVBQVU7SUFDdEMsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxLQUFLO0lBQ2pDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsS0FBSzs7O0tBRS9CLE9BQU87SUFDUCxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE9BQU87SUFDbkMsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNO0lBQ2xDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
