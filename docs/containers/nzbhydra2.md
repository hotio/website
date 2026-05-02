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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8979" onclick="CopyToClipboard('tag8979');return false;" class="tag-decoration">release</div><div id="tag857" onclick="CopyToClipboard('tag857');return false;" class="tag-decoration">release-2efb033</div><div id="tag13519" onclick="CopyToClipboard('tag13519');return false;" class="tag-decoration">release-8.8.1</div><div id="tag21418" onclick="CopyToClipboard('tag21418');return false;" class="tag-decoration">release-v8</div><div id="tag6429" onclick="CopyToClipboard('tag6429');return false;" class="tag-decoration">release-v8.8</div><div id="tag6517" onclick="CopyToClipboard('tag6517');return false;" class="tag-decoration">release-v8.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/2efb0333e864049e289214cb8227c81072da105c" target="_blank">Version update: 8.8.0 => 8.8.1</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/25247655084" target="_blank">2026-05-02 08:13:41</a></td></tr>
<tr><td><div id="tag18825" onclick="CopyToClipboard('tag18825');return false;" class="tag-decoration">testing</div><div id="tag21059" onclick="CopyToClipboard('tag21059');return false;" class="tag-decoration">testing-0834584</div><div id="tag30685" onclick="CopyToClipboard('tag30685');return false;" class="tag-decoration">testing-8.8.0</div><div id="tag5070" onclick="CopyToClipboard('tag5070');return false;" class="tag-decoration">testing-v8</div><div id="tag22310" onclick="CopyToClipboard('tag22310');return false;" class="tag-decoration">testing-v8.8</div><div id="tag15805" onclick="CopyToClipboard('tag15805');return false;" class="tag-decoration">testing-v8.8.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/083458437533e0fdf17947966429018ae971812c" target="_blank">Version update: 8.7.1 => 8.8.0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24953078460" target="_blank">2026-04-26 09:14:37</a></td></tr>
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
