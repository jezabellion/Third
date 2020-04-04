import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.a2e68b73.js';

// Copy
const destination = 'Morocco';
const chapterOne = 'Aït Benhaddou';
const chapterTwo = 	'Erg Chebbi';


const chapter = {
    one: 'Aït Benhaddou',
    two: 'Erg Chebbi'
  };

// Imagery
const photosOne = [
	{ src: 'images/bbb.jpg', alt: 'whatever' },
	{ src: 'images/bbb.jpg', alt: 'yup' },
	{ src: 'images/bbb.jpg', alt: 'new' }
];

const photosTwo = [
  { src: 'images/ddd.jpg', alt: 'stuff' },
  { src: 'images/eee.jpg', alt: 'shit' },
  { src: 'images/aaa.jpg', alt: 'shit' },
  { src: 'images/bbb.jpg', alt: 'shit' }
];

/* src/components/ChapterHeader.svelte generated by Svelte v3.20.1 */
const file = "src/components/ChapterHeader.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text(/*fart*/ ctx[0]);
			t1 = space();
			p = element("p");
			t2 = text("* * *");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, /*fart*/ ctx[0]);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "* * *");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-p4xdmg");
			add_location(h2, file, 25, 4, 610);
			attr_dev(p, "class", "svelte-p4xdmg");
			add_location(p, file, 26, 4, 630);
			attr_dev(div0, "class", "chapter-header svelte-p4xdmg");
			add_location(div0, file, 24, 2, 577);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 23, 0, 551);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h2);
			append_dev(h2, t0);
			append_dev(div0, t1);
			append_dev(div0, p);
			append_dev(p, t2);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
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
	let fart = "stuff";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ChapterHeader> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ChapterHeader", $$slots, []);
	$$self.$capture_state = () => ({ chapterOne, chapterTwo, chapter, fart });

	$$self.$inject_state = $$props => {
		if ("fart" in $$props) $$invalidate(0, fart = $$props.fart);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [fart];
}

class ChapterHeader extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ChapterHeader",
			options,
			id: create_fragment.name
		});
	}
}

export { ChapterHeader as C, photosTwo as a, chapterTwo as b, chapterOne as c, destination as d, chapter as e, photosOne as p };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcHRlckhlYWRlci42OGM2NDExMi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9tb3JvY2NvLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hhcHRlckhlYWRlci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weVxuZXhwb3J0IGNvbnN0IGRlc3RpbmF0aW9uID0gJ01vcm9jY28nO1xuZXhwb3J0IGNvbnN0IGNoYXB0ZXJPbmUgPSAnQcOvdCBCZW5oYWRkb3UnO1xuZXhwb3J0IGNvbnN0IGNoYXB0ZXJUd28gPSBcdCdFcmcgQ2hlYmJpJztcblxuXG5leHBvcnQgY29uc3QgY2hhcHRlciA9IHtcbiAgICBvbmU6ICdBw690IEJlbmhhZGRvdScsXG4gICAgdHdvOiAnRXJnIENoZWJiaSdcbiAgfTtcblxuLy8gSW1hZ2VyeVxuZXhwb3J0IGNvbnN0IHBob3Rvc09uZSA9IFtcblx0eyBzcmM6ICdpbWFnZXMvYmJiLmpwZycsIGFsdDogJ3doYXRldmVyJyB9LFxuXHR7IHNyYzogJ2ltYWdlcy9iYmIuanBnJywgYWx0OiAneXVwJyB9LFxuXHR7IHNyYzogJ2ltYWdlcy9iYmIuanBnJywgYWx0OiAnbmV3JyB9XG5dO1xuXG5leHBvcnQgY29uc3QgcGhvdG9zVHdvID0gW1xuICB7IHNyYzogJ2ltYWdlcy9kZGQuanBnJywgYWx0OiAnc3R1ZmYnIH0sXG4gIHsgc3JjOiAnaW1hZ2VzL2VlZS5qcGcnLCBhbHQ6ICdzaGl0JyB9LFxuICB7IHNyYzogJ2ltYWdlcy9hYWEuanBnJywgYWx0OiAnc2hpdCcgfSxcbiAgeyBzcmM6ICdpbWFnZXMvYmJiLmpwZycsIGFsdDogJ3NoaXQnIH1cbl07XG4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjaGFwdGVyT25lIH0gZnJvbSAnLi4vcm91dGVzL21vcm9jY28uanMnO1xuXHRpbXBvcnQgeyBjaGFwdGVyVHdvIH0gZnJvbSAnLi4vcm91dGVzL21vcm9jY28uanMnO1xuXHRpbXBvcnQgeyBjaGFwdGVyIH0gZnJvbSAnLi4vcm91dGVzL21vcm9jY28uanMnO1xuXHRsZXQgZmFydCA9ICdzdHVmZic7XG48L3NjcmlwdD5cblxuPHN0eWxlIG1lZGlhPVwic2NyZWVuXCIgbGFuZz1cInNjc3NcIj5cblx0QGltcG9ydCBcIi4vc3R5bGUvdGhlbWUuc2Nzc1wiO1xuXG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogJ0VuZ2FnZW1lbnQnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICRsaWdodGdyZXk7XG4gIH1cbiAgLmNoYXB0ZXItaGVhZGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICRsaWdodGdyZXk7XG4gIH1cbiAgLmNoYXB0ZXItaGVhZGVyIHtcbiAgICBtYXJnaW46IDZyZW0gMTRyZW07XG4gIH1cblxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiY2hhcHRlci1oZWFkZXJcIj5cbiAgICA8aDI+e2ZhcnR9PC9oMj5cbiAgICA8cD4qICogKjwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ1ksTUFBQyxXQUFXLEdBQUcsVUFBVTtBQUN6QixNQUFDLFVBQVUsR0FBRyxnQkFBZ0I7QUFDOUIsTUFBQyxVQUFVLElBQUksYUFBYTtBQUN4QztBQUNBO0FBQ1ksTUFBQyxPQUFPLEdBQUc7QUFDdkIsSUFBSSxHQUFHLEVBQUUsZUFBZTtBQUN4QixJQUFJLEdBQUcsRUFBRSxZQUFZO0FBQ3JCLElBQUk7QUFDSjtBQUNBO0FBQ1ksTUFBQyxTQUFTLEdBQUc7QUFDekIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFO0FBQzNDLENBQUMsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUN0QyxDQUFDLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDdEMsRUFBRTtBQUNGO0FBQ1ksTUFBQyxTQUFTLEdBQUc7QUFDekIsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtBQUN4QyxFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDeEMsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQ3hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQ0VTLEdBQUk7Ozs7Ozs7Ozs7Ozs7c0NBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FyQlIsSUFBSSxHQUFHLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
