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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21563" onclick="CopyToClipboard('tag21563');return false;" class="tag-decoration">release</div><div id="tag32759" onclick="CopyToClipboard('tag32759');return false;" class="tag-decoration">release-d6086f6</div><div id="tag26832" onclick="CopyToClipboard('tag26832');return false;" class="tag-decoration">release-8.7.1</div><div id="tag4507" onclick="CopyToClipboard('tag4507');return false;" class="tag-decoration">release-v8</div><div id="tag8866" onclick="CopyToClipboard('tag8866');return false;" class="tag-decoration">release-v8.7</div><div id="tag6643" onclick="CopyToClipboard('tag6643');return false;" class="tag-decoration">release-v8.7.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/d6086f6c589a047cc562af754a319b2d7a278cab" target="_blank">Version update: 8.7.0 => 8.7.1</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24637888189" target="_blank">2026-04-19 20:01:42</a></td></tr>
<tr><td><div id="tag15675" onclick="CopyToClipboard('tag15675');return false;" class="tag-decoration">testing</div><div id="tag25909" onclick="CopyToClipboard('tag25909');return false;" class="tag-decoration">testing-a0e1b0f</div><div id="tag14197" onclick="CopyToClipboard('tag14197');return false;" class="tag-decoration">testing-8.7.1</div><div id="tag7496" onclick="CopyToClipboard('tag7496');return false;" class="tag-decoration">testing-v8</div><div id="tag29106" onclick="CopyToClipboard('tag29106');return false;" class="tag-decoration">testing-v8.7</div><div id="tag20127" onclick="CopyToClipboard('tag20127');return false;" class="tag-decoration">testing-v8.7.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/a0e1b0f092a59629a339e565ddd357fbc0bd9430" target="_blank">Version update: 8.7.0 => 8.7.1</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24637888963" target="_blank">2026-04-19 20:01:44</a></td></tr>
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
