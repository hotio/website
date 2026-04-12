---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag23746" onclick="CopyToClipboard('tag23746');return false;" class="tag-decoration">nightly</div><div id="tag12938" onclick="CopyToClipboard('tag12938');return false;" class="tag-decoration">nightly-a63fa56</div><div id="tag3680" onclick="CopyToClipboard('tag3680');return false;" class="tag-decoration">nightly-20ccd4bd38917ec55083e98aeaed3e9215df63bd</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/a63fa567fbf584ce0c02741998bc9af3e551fd10" target="_blank">Version update: f5115dae290efb035c08486c737da1e8f40ae3af => 20ccd4bd38917ec55083e98aeaed3e9215df63bd</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24309472588" target="_blank">2026-04-12 14:58:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8860" onclick="CopyToClipboard('tag8860');return false;" class="tag-decoration">release</div><div id="tag176" onclick="CopyToClipboard('tag176');return false;" class="tag-decoration">release-61e4a12</div><div id="tag4809" onclick="CopyToClipboard('tag4809');return false;" class="tag-decoration">release-3.1.0</div><div id="tag25567" onclick="CopyToClipboard('tag25567');return false;" class="tag-decoration">release-v3</div><div id="tag5621" onclick="CopyToClipboard('tag5621');return false;" class="tag-decoration">release-v3.1</div><div id="tag20846" onclick="CopyToClipboard('tag20846');return false;" class="tag-decoration">release-v3.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/61e4a126c6170ac9f9170f273b9f6bde04aa339f" target="_blank">Version update: 3.0.1 => 3.1.0</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22497080527" target="_blank">2026-02-27 17:40:24</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
