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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21133" onclick="CopyToClipboard('tag21133');return false;" class="tag-decoration">v2</div><div id="tag22672" onclick="CopyToClipboard('tag22672');return false;" class="tag-decoration">v2-5f6ecc0</div><div id="tag24203" onclick="CopyToClipboard('tag24203');return false;" class="tag-decoration">v2-2.0.0.2142</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/5f6ecc069fb0039b5d6d859f49b6aab9c8c32a65" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21200283324" target="_blank">2026-01-21 06:58:33</a></td></tr>
<tr><td><div id="tag28493" onclick="CopyToClipboard('tag28493');return false;" class="tag-decoration">v3</div><div id="tag24752" onclick="CopyToClipboard('tag24752');return false;" class="tag-decoration">v3-a246737</div><div id="tag16003" onclick="CopyToClipboard('tag16003');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag31914" onclick="CopyToClipboard('tag31914');return false;" class="tag-decoration">v3-v3</div><div id="tag14833" onclick="CopyToClipboard('tag14833');return false;" class="tag-decoration">v3-v3.2</div><div id="tag1726" onclick="CopyToClipboard('tag1726');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a2467373ab61d187c2f94d41a5043b5dc9ca851f" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21200285068" target="_blank">2026-01-21 06:58:37</a></td></tr>
<tr><td><div id="tag10135" onclick="CopyToClipboard('tag10135');return false;" class="tag-decoration">v3-develop</div><div id="tag21284" onclick="CopyToClipboard('tag21284');return false;" class="tag-decoration">v3-develop-8d16fd3</div><div id="tag23663" onclick="CopyToClipboard('tag23663');return false;" class="tag-decoration">v3-develop-3.2.1-develop.69</div><div id="tag11578" onclick="CopyToClipboard('tag11578');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28753" onclick="CopyToClipboard('tag28753');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag15071" onclick="CopyToClipboard('tag15071');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8d16fd35386c080ef79532b405408f0ca1c6a219" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21200283881" target="_blank">2026-01-21 06:58:34</a></td></tr>
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
