
function add_grid( map_id, grid_data, layer_id, cell_size, extruded, elevation_scale, colour_range, auto_highlight ) {

  const gridLayer = new deck.GridLayer({
    id: 'grid-'+layer_id,
    data: grid_data,
    pickable: true,
    extruded: extruded,
    cellSize: cell_size,
    colorRange: to_rgba( colour_range ),
    elevationScale: elevation_scale,
    getPosition: d => decode_polyline( d.polyline )[0],
    onClick: info => layer_click( map_id, "grid", info ),
    autoHighlight: auto_highlight
  });
  update_layer( map_id, 'grid-'+layer_id, gridLayer );
}
