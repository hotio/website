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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31254" onclick="CopyToClipboard('tag31254');return false;" class="tag-decoration">release</div><div id="tag25180" onclick="CopyToClipboard('tag25180');return false;" class="tag-decoration">release-b4a8265</div><div id="tag7306" onclick="CopyToClipboard('tag7306');return false;" class="tag-decoration">release-9.0.5</div><div id="tag16664" onclick="CopyToClipboard('tag16664');return false;" class="tag-decoration">release-v9</div><div id="tag13167" onclick="CopyToClipboard('tag13167');return false;" class="tag-decoration">release-v9.0</div><div id="tag3553" onclick="CopyToClipboard('tag3553');return false;" class="tag-decoration">release-v9.0.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b4a8265803487286e776a5b05b17e4455564bd3f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36064674392" target="_blank">2026-09-24 21:57:44</a></td></tr>
<tr><td><div id="tag7130" onclick="CopyToClipboard('tag7130');return false;" class="tag-decoration">testing</div><div id="tag20020" onclick="CopyToClipboard('tag20020');return false;" class="tag-decoration">testing-4130b60</div><div id="tag3637" onclick="CopyToClipboard('tag3637');return false;" class="tag-decoration">testing-9.0.5</div><div id="tag22962" onclick="CopyToClipboard('tag22962');return false;" class="tag-decoration">testing-v9</div><div id="tag7250" onclick="CopyToClipboard('tag7250');return false;" class="tag-decoration">testing-v9.0</div><div id="tag2636" onclick="CopyToClipboard('tag2636');return false;" class="tag-decoration">testing-v9.0.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4130b609eec2c9b98df4d7a831c009b7768e6aa7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36064687321" target="_blank">2026-09-24 21:57:52</a></td></tr>
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
