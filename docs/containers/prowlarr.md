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
<tr><td><div id="tag10014" onclick="CopyToClipboard('tag10014');return false;" class="tag-decoration">nightly</div><div id="tag13481" onclick="CopyToClipboard('tag13481');return false;" class="tag-decoration">nightly-eb9dca5</div><div id="tag30063" onclick="CopyToClipboard('tag30063');return false;" class="tag-decoration">nightly-2.6.2.5548</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/eb9dca5026513e005f03085fb6ad94e786d4d63a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/31876558666" target="_blank">2026-08-15 09:15:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28821" onclick="CopyToClipboard('tag28821');return false;" class="tag-decoration">release</div><div id="tag7961" onclick="CopyToClipboard('tag7961');return false;" class="tag-decoration">release-93fdaad</div><div id="tag29861" onclick="CopyToClipboard('tag29861');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/93fdaad157681572c75b9654c65b003a75573bf3" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/32044772403" target="_blank">2026-08-17 16:14:37</a></td></tr>
<tr><td><div id="tag31211" onclick="CopyToClipboard('tag31211');return false;" class="tag-decoration">testing</div><div id="tag10638" onclick="CopyToClipboard('tag10638');return false;" class="tag-decoration">testing-33eee49</div><div id="tag7447" onclick="CopyToClipboard('tag7447');return false;" class="tag-decoration">testing-2.6.1.5509</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/33eee49061c1f6da80c5934112e94f15d881d3a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/31876562110" target="_blank">2026-08-15 09:16:02</a></td></tr>
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
