---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31027" onclick="CopyToClipboard('tag31027');return false;" class="tag-decoration">v2</div><div id="tag23247" onclick="CopyToClipboard('tag23247');return false;" class="tag-decoration">v2-5f6ecc0</div><div id="tag19676" onclick="CopyToClipboard('tag19676');return false;" class="tag-decoration">v2-2.0.0.2142</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/5f6ecc069fb0039b5d6d859f49b6aab9c8c32a65" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21200283324" target="_blank">2026-01-21 06:58:33</a></td></tr>
<tr><td><div id="tag23228" onclick="CopyToClipboard('tag23228');return false;" class="tag-decoration">v3</div><div id="tag20342" onclick="CopyToClipboard('tag20342');return false;" class="tag-decoration">v3-844abe1</div><div id="tag23944" onclick="CopyToClipboard('tag23944');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag524" onclick="CopyToClipboard('tag524');return false;" class="tag-decoration">v3-v3</div><div id="tag18799" onclick="CopyToClipboard('tag18799');return false;" class="tag-decoration">v3-v3.2</div><div id="tag27013" onclick="CopyToClipboard('tag27013');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/844abe14858216e73253e831b8fd9612bc2d35d3" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21198617928" target="_blank">2026-01-21 05:38:34</a></td></tr>
<tr><td><div id="tag12841" onclick="CopyToClipboard('tag12841');return false;" class="tag-decoration">v3-develop</div><div id="tag15936" onclick="CopyToClipboard('tag15936');return false;" class="tag-decoration">v3-develop-70f698b</div><div id="tag18342" onclick="CopyToClipboard('tag18342');return false;" class="tag-decoration">v3-develop-3.2.1-develop.69</div><div id="tag18667" onclick="CopyToClipboard('tag18667');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14120" onclick="CopyToClipboard('tag14120');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag15136" onclick="CopyToClipboard('tag15136');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/70f698b0d6db5573895ff058714b51a1921f1c0a" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21198616692" target="_blank">2026-01-21 05:38:31</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
