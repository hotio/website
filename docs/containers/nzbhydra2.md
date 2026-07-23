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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21980" onclick="CopyToClipboard('tag21980');return false;" class="tag-decoration">release</div><div id="tag2416" onclick="CopyToClipboard('tag2416');return false;" class="tag-decoration">release-d050adf</div><div id="tag29543" onclick="CopyToClipboard('tag29543');return false;" class="tag-decoration">release-8.9.0</div><div id="tag22693" onclick="CopyToClipboard('tag22693');return false;" class="tag-decoration">release-v8</div><div id="tag3092" onclick="CopyToClipboard('tag3092');return false;" class="tag-decoration">release-v8.9</div><div id="tag11929" onclick="CopyToClipboard('tag11929');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/d050adf2c0cca946c03c677e117d5ec083a41ca8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/30028976439" target="_blank">2026-07-23 17:20:14</a></td></tr>
<tr><td><div id="tag10111" onclick="CopyToClipboard('tag10111');return false;" class="tag-decoration">testing</div><div id="tag14550" onclick="CopyToClipboard('tag14550');return false;" class="tag-decoration">testing-7c9797d</div><div id="tag3298" onclick="CopyToClipboard('tag3298');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag29867" onclick="CopyToClipboard('tag29867');return false;" class="tag-decoration">testing-v8</div><div id="tag32501" onclick="CopyToClipboard('tag32501');return false;" class="tag-decoration">testing-v8.9</div><div id="tag24862" onclick="CopyToClipboard('tag24862');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/7c9797d9701a25cc2f729cff8e62254fa8843b06" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/30028984218" target="_blank">2026-07-23 17:20:20</a></td></tr>
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
