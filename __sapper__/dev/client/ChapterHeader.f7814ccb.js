import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.83bd10cf.js';

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
			t0 = text(/*title*/ ctx[0]);
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
			t0 = claim_text(h2_nodes, /*title*/ ctx[0]);
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
			add_location(h2, file, 25, 4, 611);
			attr_dev(p, "class", "svelte-p4xdmg");
			add_location(p, file, 26, 4, 632);
			attr_dev(div0, "class", "chapter-header svelte-p4xdmg");
			add_location(div0, file, 24, 2, 578);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 23, 0, 552);
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
	let title = "stuff";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ChapterHeader> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ChapterHeader", $$slots, []);
	$$self.$capture_state = () => ({ chapterOne, chapterTwo, chapter, title });

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [title];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcHRlckhlYWRlci5mNzgxNGNjYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9tb3JvY2NvLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hhcHRlckhlYWRlci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weVxuZXhwb3J0IGNvbnN0IGRlc3RpbmF0aW9uID0gJ01vcm9jY28nO1xuZXhwb3J0IGNvbnN0IGNoYXB0ZXJPbmUgPSAnQcOvdCBCZW5oYWRkb3UnO1xuZXhwb3J0IGNvbnN0IGNoYXB0ZXJUd28gPSBcdCdFcmcgQ2hlYmJpJztcblxuXG5leHBvcnQgY29uc3QgY2hhcHRlciA9IHtcbiAgICBvbmU6ICdBw690IEJlbmhhZGRvdScsXG4gICAgdHdvOiAnRXJnIENoZWJiaSdcbiAgfTtcblxuLy8gSW1hZ2VyeVxuZXhwb3J0IGNvbnN0IHBob3Rvc09uZSA9IFtcblx0eyBzcmM6ICdpbWFnZXMvYmJiLmpwZycsIGFsdDogJ3doYXRldmVyJyB9LFxuXHR7IHNyYzogJ2ltYWdlcy9iYmIuanBnJywgYWx0OiAneXVwJyB9LFxuXHR7IHNyYzogJ2ltYWdlcy9iYmIuanBnJywgYWx0OiAnbmV3JyB9XG5dO1xuXG5leHBvcnQgY29uc3QgcGhvdG9zVHdvID0gW1xuICB7IHNyYzogJ2ltYWdlcy9kZGQuanBnJywgYWx0OiAnc3R1ZmYnIH0sXG4gIHsgc3JjOiAnaW1hZ2VzL2VlZS5qcGcnLCBhbHQ6ICdzaGl0JyB9LFxuICB7IHNyYzogJ2ltYWdlcy9hYWEuanBnJywgYWx0OiAnc2hpdCcgfSxcbiAgeyBzcmM6ICdpbWFnZXMvYmJiLmpwZycsIGFsdDogJ3NoaXQnIH1cbl07XG4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjaGFwdGVyT25lIH0gZnJvbSAnLi4vcm91dGVzL21vcm9jY28uanMnO1xuXHRpbXBvcnQgeyBjaGFwdGVyVHdvIH0gZnJvbSAnLi4vcm91dGVzL21vcm9jY28uanMnO1xuXHRpbXBvcnQgeyBjaGFwdGVyIH0gZnJvbSAnLi4vcm91dGVzL21vcm9jY28uanMnO1xuXHRsZXQgdGl0bGUgPSAnc3R1ZmYnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBtZWRpYT1cInNjcmVlblwiIGxhbmc9XCJzY3NzXCI+XG5cdEBpbXBvcnQgXCIuL3N0eWxlL3RoZW1lLnNjc3NcIjtcblxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdFbmdhZ2VtZW50JywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkbGlnaHRncmV5O1xuICB9XG4gIC5jaGFwdGVyLWhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkbGlnaHRncmV5O1xuICB9XG4gIC5jaGFwdGVyLWhlYWRlciB7XG4gICAgbWFyZ2luOiA2cmVtIDE0cmVtO1xuICB9XG5cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImNoYXB0ZXItaGVhZGVyXCI+XG4gICAgPGgyPnt0aXRsZX08L2gyPlxuICAgIDxwPiogKiAqPC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDWSxNQUFDLFdBQVcsR0FBRyxVQUFVO0FBQ3pCLE1BQUMsVUFBVSxHQUFHLGdCQUFnQjtBQUM5QixNQUFDLFVBQVUsSUFBSSxhQUFhO0FBQ3hDO0FBQ0E7QUFDWSxNQUFDLE9BQU8sR0FBRztBQUN2QixJQUFJLEdBQUcsRUFBRSxlQUFlO0FBQ3hCLElBQUksR0FBRyxFQUFFLFlBQVk7QUFDckIsSUFBSTtBQUNKO0FBQ0E7QUFDWSxNQUFDLFNBQVMsR0FBRztBQUN6QixDQUFDLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUU7QUFDM0MsQ0FBQyxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3RDLENBQUMsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUN0QyxFQUFFO0FBQ0Y7QUFDWSxNQUFDLFNBQVMsR0FBRztBQUN6QixFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7QUFDekMsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQ3hDLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtBQUN4QyxFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJDRVMsR0FBSzs7Ozs7Ozs7Ozs7Ozt1Q0FBTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXJCVCxLQUFLLEdBQUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
