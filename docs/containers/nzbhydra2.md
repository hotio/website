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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27468" onclick="CopyToClipboard('tag27468');return false;" class="tag-decoration">release</div><div id="tag26497" onclick="CopyToClipboard('tag26497');return false;" class="tag-decoration">release-3bac65f</div><div id="tag19255" onclick="CopyToClipboard('tag19255');return false;" class="tag-decoration">release-9.1.1</div><div id="tag23481" onclick="CopyToClipboard('tag23481');return false;" class="tag-decoration">release-v9</div><div id="tag16799" onclick="CopyToClipboard('tag16799');return false;" class="tag-decoration">release-v9.1</div><div id="tag7832" onclick="CopyToClipboard('tag7832');return false;" class="tag-decoration">release-v9.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/3bac65f882808045def39e862a2b12b146b016d3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/38655562006" target="_blank">2026-10-14 23:40:48</a></td></tr>
<tr><td><div id="tag22059" onclick="CopyToClipboard('tag22059');return false;" class="tag-decoration">testing</div><div id="tag13399" onclick="CopyToClipboard('tag13399');return false;" class="tag-decoration">testing-d670366</div><div id="tag24629" onclick="CopyToClipboard('tag24629');return false;" class="tag-decoration">testing-9.1.1</div><div id="tag6702" onclick="CopyToClipboard('tag6702');return false;" class="tag-decoration">testing-v9</div><div id="tag18408" onclick="CopyToClipboard('tag18408');return false;" class="tag-decoration">testing-v9.1</div><div id="tag30910" onclick="CopyToClipboard('tag30910');return false;" class="tag-decoration">testing-v9.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/d670366f350ff86b6bfc5ea4bdbf4db04d038e63" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/39010353092" target="_blank">2026-10-17 06:33:27</a></td></tr>
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
