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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5442" onclick="CopyToClipboard('tag5442');return false;" class="tag-decoration">release</div><div id="tag2599" onclick="CopyToClipboard('tag2599');return false;" class="tag-decoration">release-a5dd3ad</div><div id="tag3914" onclick="CopyToClipboard('tag3914');return false;" class="tag-decoration">release-8.9.0</div><div id="tag8397" onclick="CopyToClipboard('tag8397');return false;" class="tag-decoration">release-v8</div><div id="tag2563" onclick="CopyToClipboard('tag2563');return false;" class="tag-decoration">release-v8.9</div><div id="tag8097" onclick="CopyToClipboard('tag8097');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/a5dd3ad4388e83c7bf5646622f6b7ca4f30ebd57" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35099928589" target="_blank">2026-09-16 13:07:30</a></td></tr>
<tr><td><div id="tag8527" onclick="CopyToClipboard('tag8527');return false;" class="tag-decoration">testing</div><div id="tag12513" onclick="CopyToClipboard('tag12513');return false;" class="tag-decoration">testing-88bdb74</div><div id="tag25520" onclick="CopyToClipboard('tag25520');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag32109" onclick="CopyToClipboard('tag32109');return false;" class="tag-decoration">testing-v8</div><div id="tag16622" onclick="CopyToClipboard('tag16622');return false;" class="tag-decoration">testing-v8.9</div><div id="tag9089" onclick="CopyToClipboard('tag9089');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/88bdb74cf89e98e3517dbfabe4595977e906f655" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35131388485" target="_blank">2026-09-16 17:57:34</a></td></tr>
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
