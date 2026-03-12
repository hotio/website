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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5241" onclick="CopyToClipboard('tag5241');return false;" class="tag-decoration">release</div><div id="tag28170" onclick="CopyToClipboard('tag28170');return false;" class="tag-decoration">release-1ab9396</div><div id="tag6844" onclick="CopyToClipboard('tag6844');return false;" class="tag-decoration">release-8.5.2</div><div id="tag31794" onclick="CopyToClipboard('tag31794');return false;" class="tag-decoration">release-v8</div><div id="tag38" onclick="CopyToClipboard('tag38');return false;" class="tag-decoration">release-v8.5</div><div id="tag29759" onclick="CopyToClipboard('tag29759');return false;" class="tag-decoration">release-v8.5.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/1ab93963dfaaa763152e4afe36624a98873bb63d" target="_blank">Version update: 8.5.1 => 8.5.2</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/23021396384" target="_blank">2026-03-12 20:03:42</a></td></tr>
<tr><td><div id="tag15434" onclick="CopyToClipboard('tag15434');return false;" class="tag-decoration">testing</div><div id="tag20973" onclick="CopyToClipboard('tag20973');return false;" class="tag-decoration">testing-082de55</div><div id="tag25670" onclick="CopyToClipboard('tag25670');return false;" class="tag-decoration">testing-8.5.2</div><div id="tag17676" onclick="CopyToClipboard('tag17676');return false;" class="tag-decoration">testing-v8</div><div id="tag3204" onclick="CopyToClipboard('tag3204');return false;" class="tag-decoration">testing-v8.5</div><div id="tag15216" onclick="CopyToClipboard('tag15216');return false;" class="tag-decoration">testing-v8.5.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/082de55489748109d57e9990a211cd4efd744b23" target="_blank">Version update: 8.5.1 => 8.5.2</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/23021397104" target="_blank">2026-03-12 20:03:43</a></td></tr>
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
