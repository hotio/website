---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag4334" onclick="CopyToClipboard('tag4334');return false;" class="tag-decoration">nightly</div><div id="tag25307" onclick="CopyToClipboard('tag25307');return false;" class="tag-decoration">nightly-668d5a3</div><div id="tag31063" onclick="CopyToClipboard('tag31063');return false;" class="tag-decoration">nightly-2.6.2.5557</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/668d5a3e5df4b55be6626983d5dd9adfe04b4d1b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/32328904218" target="_blank">2026-08-20 03:37:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13591" onclick="CopyToClipboard('tag13591');return false;" class="tag-decoration">release</div><div id="tag9504" onclick="CopyToClipboard('tag9504');return false;" class="tag-decoration">release-5c7ceaa</div><div id="tag14835" onclick="CopyToClipboard('tag14835');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/5c7ceaab3d689e838b363f53387e84e90a64c85f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/32328910906" target="_blank">2026-08-20 03:37:37</a></td></tr>
<tr><td><div id="tag4701" onclick="CopyToClipboard('tag4701');return false;" class="tag-decoration">testing</div><div id="tag13988" onclick="CopyToClipboard('tag13988');return false;" class="tag-decoration">testing-1099712</div><div id="tag3526" onclick="CopyToClipboard('tag3526');return false;" class="tag-decoration">testing-2.6.1.5509</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/109971221a393f9bafec193d18033420da84880a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/32328907399" target="_blank">2026-08-20 03:37:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
