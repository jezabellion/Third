import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, h as claim_text, f as detach_dev, g as claim_space, j as attr_dev, k as add_location, m as insert_dev, n as append_dev, E as set_data_dev, p as noop } from './client.ea70b7e3.js';

// Travel Page Data
// Morocco

const backgroundHero = 'url(../images/morocco-thumb.jpg);';

const copy = {
  blurb: 'New new new shoes mane man to take your love of astronomy to the next level is a big next step in the propsition',
  farewell: 'Merci beaucoup Morocco!'
};

const chapter = {
      one: 'Aït Benhaddou',
      two: 'Erg Chebbi'
    };

const photos = {
   one: [
    	{ src: 'images/morocco/IMG_6E31F46CF07B-3.jpg', alt: 'whatever' },
    	{ src: 'images/morocco/IMG_AEF333E26C15-1.jpeg', alt: 'yup' },
    	{ src: 'images/bbb.jpg', alt: 'new' }
    ],

    two: [
      { src: 'images/ddd.jpg', alt: 'stuff' },
      { src: 'images/eee.jpg', alt: 'shit' },
      { src: 'images/aaa.jpg', alt: 'shit' },
      { src: 'images/bbb.jpg', alt: 'shit' }
    ]
};

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
			attr_dev(h2, "class", "svelte-hn3gka");
			add_location(h2, file, 32, 4, 721);
			attr_dev(p, "class", "svelte-hn3gka");
			add_location(p, file, 33, 4, 742);
			attr_dev(div0, "class", "chapter-header svelte-hn3gka");
			add_location(div0, file, 31, 2, 688);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 30, 0, 662);
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
		p: function update(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data_dev(t0, /*title*/ ctx[0]);
		},
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
	let { title } = $$props;
	const writable_props = ["title"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ChapterHeader> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ChapterHeader", $$slots, []);

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
	};

	$$self.$capture_state = () => ({ chapter, title });

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
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ChapterHeader",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*title*/ ctx[0] === undefined && !("title" in props)) {
			console.warn("<ChapterHeader> was created without expected prop 'title'");
		}
	}

	get title() {
		throw new Error("<ChapterHeader>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<ChapterHeader>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { ChapterHeader as C, chapter as a, backgroundHero as b, copy as c, photos as p };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcHRlckhlYWRlci4yMDRlNmVjNy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9tb3JvY2NvLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hhcHRlckhlYWRlci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHJhdmVsIFBhZ2UgRGF0YVxuLy8gTW9yb2Njb1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZEhlcm8gPSAndXJsKC4uL2ltYWdlcy9tb3JvY2NvLXRodW1iLmpwZyk7J1xuXG5leHBvcnQgY29uc3QgY29weSA9IHtcbiAgYmx1cmI6ICdOZXcgbmV3IG5ldyBzaG9lcyBtYW5lIG1hbiB0byB0YWtlIHlvdXIgbG92ZSBvZiBhc3Ryb25vbXkgdG8gdGhlIG5leHQgbGV2ZWwgaXMgYSBiaWcgbmV4dCBzdGVwIGluIHRoZSBwcm9wc2l0aW9uJyxcbiAgZmFyZXdlbGw6ICdNZXJjaSBiZWF1Y291cCBNb3JvY2NvISdcbn1cblxuZXhwb3J0IGNvbnN0IGNoYXB0ZXIgPSB7XG4gICAgICBvbmU6ICdBw690IEJlbmhhZGRvdScsXG4gICAgICB0d286ICdFcmcgQ2hlYmJpJ1xuICAgIH1cblxuZXhwb3J0IGNvbnN0IHBob3RvcyA9IHtcbiAgIG9uZTogW1xuICAgIFx0eyBzcmM6ICdpbWFnZXMvbW9yb2Njby9JTUdfNkUzMUY0NkNGMDdCLTMuanBnJywgYWx0OiAnd2hhdGV2ZXInIH0sXG4gICAgXHR7IHNyYzogJ2ltYWdlcy9tb3JvY2NvL0lNR19BRUYzMzNFMjZDMTUtMS5qcGVnJywgYWx0OiAneXVwJyB9LFxuICAgIFx0eyBzcmM6ICdpbWFnZXMvYmJiLmpwZycsIGFsdDogJ25ldycgfVxuICAgIF0sXG5cbiAgICB0d286IFtcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL2RkZC5qcGcnLCBhbHQ6ICdzdHVmZicgfSxcbiAgICAgIHsgc3JjOiAnaW1hZ2VzL2VlZS5qcGcnLCBhbHQ6ICdzaGl0JyB9LFxuICAgICAgeyBzcmM6ICdpbWFnZXMvYWFhLmpwZycsIGFsdDogJ3NoaXQnIH0sXG4gICAgICB7IHNyYzogJ2ltYWdlcy9iYmIuanBnJywgYWx0OiAnc2hpdCcgfVxuICAgIF1cbn07XG4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjaGFwdGVyIH0gZnJvbSAnLi4vcm91dGVzL21vcm9jY28uanMnO1xuXHRleHBvcnQgbGV0IHRpdGxlO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBtZWRpYT1cInNjcmVlblwiIGxhbmc9XCJzY3NzXCI+XG5cdEBpbXBvcnQgXCIuL3N0eWxlL3RoZW1lLnNjc3NcIjtcblxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdFbmdhZ2VtZW50JywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkbGlnaHRncmV5O1xuICB9XG4gIC5jaGFwdGVyLWhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkbGlnaHRncmV5O1xuICB9XG4gIC5jaGFwdGVyLWhlYWRlciB7XG4gICAgbWFyZ2luOiA2cmVtIDE0cmVtO1xuICB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuXHQuY2hhcHRlci1oZWFkZXIge1xuXHRcdG1hcmdpbjogNXJlbSAxcmVtO1xuXHR9XG5cdC5jaGFwdGVyLWhlYWRlciBoMiB7XG5cdFx0Zm9udC1zaXplOiAzcmVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAzcmVtO1xuXHR9XG5cdC5jaGFwdGVyLWhlYWRlciBwOm50aC1jaGlsZCgyKSB7XG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdH1cbn1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImNoYXB0ZXItaGVhZGVyXCI+XG4gICAgPGgyPnt0aXRsZX08L2gyPlxuICAgIDxwPiogKiAqPC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ1ksTUFBQyxjQUFjLEdBQUcsb0NBQW1DO0FBQ2pFO0FBQ1ksTUFBQyxJQUFJLEdBQUc7QUFDcEIsRUFBRSxLQUFLLEVBQUUsa0hBQWtIO0FBQzNILEVBQUUsUUFBUSxFQUFFLHlCQUF5QjtBQUNyQyxFQUFDO0FBQ0Q7QUFDWSxNQUFDLE9BQU8sR0FBRztBQUN2QixNQUFNLEdBQUcsRUFBRSxlQUFlO0FBQzFCLE1BQU0sR0FBRyxFQUFFLFlBQVk7QUFDdkIsTUFBSztBQUNMO0FBQ1ksTUFBQyxNQUFNLEdBQUc7QUFDdEIsR0FBRyxHQUFHLEVBQUU7QUFDUixLQUFLLEVBQUUsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUU7QUFDdEUsS0FBSyxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ2xFLEtBQUssRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUMxQyxLQUFLO0FBQ0w7QUFDQSxJQUFJLEdBQUcsRUFBRTtBQUNULE1BQU0sRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRTtBQUM3QyxNQUFNLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDNUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQzVDLE1BQU0sRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtBQUM1QyxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJDSVMsR0FBSzs7Ozs7Ozs7Ozs7Ozt1Q0FBTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VEQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTlCRixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
