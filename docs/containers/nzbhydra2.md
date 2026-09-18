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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4895" onclick="CopyToClipboard('tag4895');return false;" class="tag-decoration">release</div><div id="tag13060" onclick="CopyToClipboard('tag13060');return false;" class="tag-decoration">release-9e9d9ae</div><div id="tag269" onclick="CopyToClipboard('tag269');return false;" class="tag-decoration">release-8.9.0</div><div id="tag26534" onclick="CopyToClipboard('tag26534');return false;" class="tag-decoration">release-v8</div><div id="tag5570" onclick="CopyToClipboard('tag5570');return false;" class="tag-decoration">release-v8.9</div><div id="tag26917" onclick="CopyToClipboard('tag26917');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/9e9d9ae27809bce0f150cb0e7d8b9cc384c8a69a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35150262248" target="_blank">2026-09-16 21:03:59</a></td></tr>
<tr><td><div id="tag24560" onclick="CopyToClipboard('tag24560');return false;" class="tag-decoration">testing</div><div id="tag11641" onclick="CopyToClipboard('tag11641');return false;" class="tag-decoration">testing-7371f05</div><div id="tag29387" onclick="CopyToClipboard('tag29387');return false;" class="tag-decoration">testing-9.0.0</div><div id="tag23419" onclick="CopyToClipboard('tag23419');return false;" class="tag-decoration">testing-v9</div><div id="tag17477" onclick="CopyToClipboard('tag17477');return false;" class="tag-decoration">testing-v9.0</div><div id="tag9734" onclick="CopyToClipboard('tag9734');return false;" class="tag-decoration">testing-v9.0.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/7371f0540be8f7d3a68a66ac3fba212391620036" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35317575750" target="_blank">2026-09-18 07:02:39</a></td></tr>
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
