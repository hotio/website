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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13560" onclick="CopyToClipboard('tag13560');return false;" class="tag-decoration">release</div><div id="tag8253" onclick="CopyToClipboard('tag8253');return false;" class="tag-decoration">release-419010d</div><div id="tag13168" onclick="CopyToClipboard('tag13168');return false;" class="tag-decoration">release-8.4.1</div><div id="tag16772" onclick="CopyToClipboard('tag16772');return false;" class="tag-decoration">release-v8</div><div id="tag27576" onclick="CopyToClipboard('tag27576');return false;" class="tag-decoration">release-v8.4</div><div id="tag31595" onclick="CopyToClipboard('tag31595');return false;" class="tag-decoration">release-v8.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/419010d1c2ac90b6e06035912340ce0181f1352b" target="_blank">Version update: 8.4.0 => 8.4.1</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21559796719" target="_blank">2026-02-01 08:38:54</a></td></tr>
<tr><td><div id="tag12893" onclick="CopyToClipboard('tag12893');return false;" class="tag-decoration">testing</div><div id="tag4638" onclick="CopyToClipboard('tag4638');return false;" class="tag-decoration">testing-61f28cb</div><div id="tag15646" onclick="CopyToClipboard('tag15646');return false;" class="tag-decoration">testing-8.4.0</div><div id="tag21929" onclick="CopyToClipboard('tag21929');return false;" class="tag-decoration">testing-v8</div><div id="tag2310" onclick="CopyToClipboard('tag2310');return false;" class="tag-decoration">testing-v8.4</div><div id="tag11297" onclick="CopyToClipboard('tag11297');return false;" class="tag-decoration">testing-v8.4.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/61f28cb0b0c46cafdc06c7dba856d5084bf61897" target="_blank">Version update: 8.3.0 => 8.4.0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21544836827" target="_blank">2026-01-31 12:58:33</a></td></tr>
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
