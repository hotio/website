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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15138" onclick="CopyToClipboard('tag15138');return false;" class="tag-decoration">release</div><div id="tag3799" onclick="CopyToClipboard('tag3799');return false;" class="tag-decoration">release-66bf819</div><div id="tag4332" onclick="CopyToClipboard('tag4332');return false;" class="tag-decoration">release-8.8.5</div><div id="tag13600" onclick="CopyToClipboard('tag13600');return false;" class="tag-decoration">release-v8</div><div id="tag1123" onclick="CopyToClipboard('tag1123');return false;" class="tag-decoration">release-v8.8</div><div id="tag21554" onclick="CopyToClipboard('tag21554');return false;" class="tag-decoration">release-v8.8.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/66bf8191f34898f552f2baaebdbcfc63167513fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/28491799749" target="_blank">2026-07-01 03:38:45</a></td></tr>
<tr><td><div id="tag11049" onclick="CopyToClipboard('tag11049');return false;" class="tag-decoration">testing</div><div id="tag20028" onclick="CopyToClipboard('tag20028');return false;" class="tag-decoration">testing-7c8373f</div><div id="tag10308" onclick="CopyToClipboard('tag10308');return false;" class="tag-decoration">testing-8.8.5</div><div id="tag2557" onclick="CopyToClipboard('tag2557');return false;" class="tag-decoration">testing-v8</div><div id="tag20523" onclick="CopyToClipboard('tag20523');return false;" class="tag-decoration">testing-v8.8</div><div id="tag25744" onclick="CopyToClipboard('tag25744');return false;" class="tag-decoration">testing-v8.8.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/7c8373f068d85e7a8ec06fe9b28f33ce033ca341" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/28443056472" target="_blank">2026-06-30 12:07:06</a></td></tr>
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
