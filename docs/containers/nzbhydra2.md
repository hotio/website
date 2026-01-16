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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26716" onclick="CopyToClipboard('tag26716');return false;" class="tag-decoration">release</div><div id="tag4948" onclick="CopyToClipboard('tag4948');return false;" class="tag-decoration">release-9437e8c</div><div id="tag3158" onclick="CopyToClipboard('tag3158');return false;" class="tag-decoration">release-8.2.3</div><div id="tag2619" onclick="CopyToClipboard('tag2619');return false;" class="tag-decoration">release-v8</div><div id="tag1028" onclick="CopyToClipboard('tag1028');return false;" class="tag-decoration">release-v8.2</div><div id="tag11702" onclick="CopyToClipboard('tag11702');return false;" class="tag-decoration">release-v8.2.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/9437e8c1c0ccccf51d04d604fc061251c9c1d9ba" target="_blank">Upstream update: noblevpn-ea653c4 => noblevpn-311995b</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21063284469" target="_blank">2026-01-16 10:17:18</a></td></tr>
<tr><td><div id="tag10183" onclick="CopyToClipboard('tag10183');return false;" class="tag-decoration">testing</div><div id="tag6200" onclick="CopyToClipboard('tag6200');return false;" class="tag-decoration">testing-4e1b116</div><div id="tag14648" onclick="CopyToClipboard('tag14648');return false;" class="tag-decoration">testing-8.2.3</div><div id="tag9415" onclick="CopyToClipboard('tag9415');return false;" class="tag-decoration">testing-v8</div><div id="tag12307" onclick="CopyToClipboard('tag12307');return false;" class="tag-decoration">testing-v8.2</div><div id="tag10432" onclick="CopyToClipboard('tag10432');return false;" class="tag-decoration">testing-v8.2.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4e1b1164530bbd2fc0a5904c7fd840009c115ef3" target="_blank">Upstream update: noblevpn-ea653c4 => noblevpn-311995b</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21063284976" target="_blank">2026-01-16 10:17:19</a></td></tr>
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
