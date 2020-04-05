import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, y as set_data_dev, n as noop } from './client.c5f0fabe.js';

// Copy
const destination = 'Morocco';
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
			add_location(h2, file, 23, 4, 504);
			attr_dev(p, "class", "svelte-p4xdmg");
			add_location(p, file, 24, 4, 525);
			attr_dev(div0, "class", "chapter-header svelte-p4xdmg");
			add_location(div0, file, 22, 2, 471);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 21, 0, 445);
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

export { ChapterHeader as C, photosTwo as a, chapter as c, destination as d, photosOne as p };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcHRlckhlYWRlci44OTU4Zjk5MC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9tb3JvY2NvLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2hhcHRlckhlYWRlci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weVxuZXhwb3J0IGNvbnN0IGRlc3RpbmF0aW9uID0gJ01vcm9jY28nO1xuZXhwb3J0IGNvbnN0IGNoYXB0ZXIgPSB7XG4gICAgb25lOiAnQcOvdCBCZW5oYWRkb3UnLFxuICAgIHR3bzogJ0VyZyBDaGViYmknXG4gIH07XG5cbi8vIEltYWdlcnlcbmV4cG9ydCBjb25zdCBwaG90b3NPbmUgPSBbXG5cdHsgc3JjOiAnaW1hZ2VzL2JiYi5qcGcnLCBhbHQ6ICd3aGF0ZXZlcicgfSxcblx0eyBzcmM6ICdpbWFnZXMvYmJiLmpwZycsIGFsdDogJ3l1cCcgfSxcblx0eyBzcmM6ICdpbWFnZXMvYmJiLmpwZycsIGFsdDogJ25ldycgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHBob3Rvc1R3byA9IFtcbiAgeyBzcmM6ICdpbWFnZXMvZGRkLmpwZycsIGFsdDogJ3N0dWZmJyB9LFxuICB7IHNyYzogJ2ltYWdlcy9lZWUuanBnJywgYWx0OiAnc2hpdCcgfSxcbiAgeyBzcmM6ICdpbWFnZXMvYWFhLmpwZycsIGFsdDogJ3NoaXQnIH0sXG4gIHsgc3JjOiAnaW1hZ2VzL2JiYi5qcGcnLCBhbHQ6ICdzaGl0JyB9XG5dO1xuIiwiPHNjcmlwdD5cblx0aW1wb3J0IHsgY2hhcHRlciB9IGZyb20gJy4uL3JvdXRlcy9tb3JvY2NvLmpzJztcblx0ZXhwb3J0IGxldCB0aXRsZTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbWVkaWE9XCJzY3JlZW5cIiBsYW5nPVwic2Nzc1wiPlxuXHRAaW1wb3J0IFwiLi9zdHlsZS90aGVtZS5zY3NzXCI7XG5cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnRW5nYWdlbWVudCcsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJGxpZ2h0Z3JleTtcbiAgfVxuICAuY2hhcHRlci1oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJGxpZ2h0Z3JleTtcbiAgfVxuICAuY2hhcHRlci1oZWFkZXIge1xuICAgIG1hcmdpbjogNnJlbSAxNHJlbTtcbiAgfVxuXG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJjaGFwdGVyLWhlYWRlclwiPlxuICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICA8cD4qICogKjwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ1ksTUFBQyxXQUFXLEdBQUcsVUFBVTtBQUN6QixNQUFDLE9BQU8sR0FBRztBQUN2QixJQUFJLEdBQUcsRUFBRSxlQUFlO0FBQ3hCLElBQUksR0FBRyxFQUFFLFlBQVk7QUFDckIsSUFBSTtBQUNKO0FBQ0E7QUFDWSxNQUFDLFNBQVMsR0FBRztBQUN6QixDQUFDLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUU7QUFDM0MsQ0FBQyxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3RDLENBQUMsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUN0QyxFQUFFO0FBQ0Y7QUFDWSxNQUFDLFNBQVMsR0FBRztBQUN6QixFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7QUFDekMsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQ3hDLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtBQUN4QyxFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJDSVMsR0FBSzs7Ozs7Ozs7Ozs7Ozt1Q0FBTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VEQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXJCRixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
