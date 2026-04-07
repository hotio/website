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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9942" onclick="CopyToClipboard('tag9942');return false;" class="tag-decoration">release</div><div id="tag27730" onclick="CopyToClipboard('tag27730');return false;" class="tag-decoration">release-5ed2473</div><div id="tag32545" onclick="CopyToClipboard('tag32545');return false;" class="tag-decoration">release-8.5.3</div><div id="tag7899" onclick="CopyToClipboard('tag7899');return false;" class="tag-decoration">release-v8</div><div id="tag24843" onclick="CopyToClipboard('tag24843');return false;" class="tag-decoration">release-v8.5</div><div id="tag22320" onclick="CopyToClipboard('tag22320');return false;" class="tag-decoration">release-v8.5.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/5ed24737a7ef391601f1abca18a74fdc51e692e9" target="_blank">Upstream update: noblevpn-3867c07 => noblevpn-cba64e8</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24067324259" target="_blank">2026-04-07 06:15:52</a></td></tr>
<tr><td><div id="tag21206" onclick="CopyToClipboard('tag21206');return false;" class="tag-decoration">testing</div><div id="tag8676" onclick="CopyToClipboard('tag8676');return false;" class="tag-decoration">testing-72f0d06</div><div id="tag2499" onclick="CopyToClipboard('tag2499');return false;" class="tag-decoration">testing-8.5.3</div><div id="tag20217" onclick="CopyToClipboard('tag20217');return false;" class="tag-decoration">testing-v8</div><div id="tag31347" onclick="CopyToClipboard('tag31347');return false;" class="tag-decoration">testing-v8.5</div><div id="tag21474" onclick="CopyToClipboard('tag21474');return false;" class="tag-decoration">testing-v8.5.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/72f0d06e54e841437b4a5a91022f8d265ab52aed" target="_blank">Upstream update: noblevpn-3867c07 => noblevpn-cba64e8</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24067325034" target="_blank">2026-04-07 06:15:54</a></td></tr>
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
