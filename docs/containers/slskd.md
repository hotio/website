---
hide:
  - toc
title: hotio/slskd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag10134" onclick="CopyToClipboard('tag10134');return false;" class="tag-decoration">nightly</div><div id="tag5401" onclick="CopyToClipboard('tag5401');return false;" class="tag-decoration">nightly-2f0ff48</div><div id="tag26412" onclick="CopyToClipboard('tag26412');return false;" class="tag-decoration">nightly-0.26.1.65534-6a450e41</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/2f0ff48fb2208f7856926d6e3fdf36b96af0104b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/39183739197" target="_blank">2026-10-19 01:05:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9097" onclick="CopyToClipboard('tag9097');return false;" class="tag-decoration">release</div><div id="tag5809" onclick="CopyToClipboard('tag5809');return false;" class="tag-decoration">release-4be23e9</div><div id="tag16182" onclick="CopyToClipboard('tag16182');return false;" class="tag-decoration">release-0.26.1</div><div id="tag19588" onclick="CopyToClipboard('tag19588');return false;" class="tag-decoration">release-v0</div><div id="tag9544" onclick="CopyToClipboard('tag9544');return false;" class="tag-decoration">release-v0.26</div><div id="tag3447" onclick="CopyToClipboard('tag3447');return false;" class="tag-decoration">release-v0.26.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/4be23e9c308caf2cd3c3e5d658f57cbf060dd093" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/39136104288" target="_blank">2026-10-18 14:27:54</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -p 5031:5031 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5030/tcp,5031/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/slskd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
          - "5031:5031"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5030/tcp,5031/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
