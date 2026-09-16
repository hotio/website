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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7237" onclick="CopyToClipboard('tag7237');return false;" class="tag-decoration">release</div><div id="tag1228" onclick="CopyToClipboard('tag1228');return false;" class="tag-decoration">release-042b757</div><div id="tag31742" onclick="CopyToClipboard('tag31742');return false;" class="tag-decoration">release-8.9.0</div><div id="tag18840" onclick="CopyToClipboard('tag18840');return false;" class="tag-decoration">release-v8</div><div id="tag11774" onclick="CopyToClipboard('tag11774');return false;" class="tag-decoration">release-v8.9</div><div id="tag30693" onclick="CopyToClipboard('tag30693');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/042b75705d6e003ff9f5c8d05e7b4e80a74c3a0e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35131418578" target="_blank">2026-09-16 17:57:52</a></td></tr>
<tr><td><div id="tag7236" onclick="CopyToClipboard('tag7236');return false;" class="tag-decoration">testing</div><div id="tag12632" onclick="CopyToClipboard('tag12632');return false;" class="tag-decoration">testing-88bdb74</div><div id="tag9112" onclick="CopyToClipboard('tag9112');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag31580" onclick="CopyToClipboard('tag31580');return false;" class="tag-decoration">testing-v8</div><div id="tag21659" onclick="CopyToClipboard('tag21659');return false;" class="tag-decoration">testing-v8.9</div><div id="tag31692" onclick="CopyToClipboard('tag31692');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/88bdb74cf89e98e3517dbfabe4595977e906f655" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35131388485" target="_blank">2026-09-16 17:57:34</a></td></tr>
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
