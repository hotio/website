---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29956" onclick="CopyToClipboard('tag29956');return false;" class="tag-decoration">release</div><div id="tag10673" onclick="CopyToClipboard('tag10673');return false;" class="tag-decoration">release-c7d10d1</div><div id="tag13606" onclick="CopyToClipboard('tag13606');return false;" class="tag-decoration">release-8.3.0</div><div id="tag22429" onclick="CopyToClipboard('tag22429');return false;" class="tag-decoration">release-v8</div><div id="tag32" onclick="CopyToClipboard('tag32');return false;" class="tag-decoration">release-v8.3</div><div id="tag17227" onclick="CopyToClipboard('tag17227');return false;" class="tag-decoration">release-v8.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/c7d10d1100ce3fd5b88ec5a518da76735afaa587" target="_blank">Upstream update: noblevpn-6fa044b => noblevpn-9c1903d</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21243850058" target="_blank">2026-01-22 09:51:27</a></td></tr>
<tr><td><div id="tag6249" onclick="CopyToClipboard('tag6249');return false;" class="tag-decoration">testing</div><div id="tag5147" onclick="CopyToClipboard('tag5147');return false;" class="tag-decoration">testing-1a46139</div><div id="tag25556" onclick="CopyToClipboard('tag25556');return false;" class="tag-decoration">testing-8.3.0</div><div id="tag11871" onclick="CopyToClipboard('tag11871');return false;" class="tag-decoration">testing-v8</div><div id="tag29403" onclick="CopyToClipboard('tag29403');return false;" class="tag-decoration">testing-v8.3</div><div id="tag24293" onclick="CopyToClipboard('tag24293');return false;" class="tag-decoration">testing-v8.3.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/1a46139a86b8fe335dd704ab84bfd33fd19e3aac" target="_blank">Upstream update: noblevpn-4c01d7f => noblevpn-6fa044b</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21237945702" target="_blank">2026-01-22 06:03:01</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
