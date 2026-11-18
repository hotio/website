---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag20930" onclick="CopyToClipboard('tag20930');return false;" class="tag-decoration">nightly</div><div id="tag17547" onclick="CopyToClipboard('tag17547');return false;" class="tag-decoration">nightly-c7af9a5</div><div id="tag21855" onclick="CopyToClipboard('tag21855');return false;" class="tag-decoration">nightly-08530f276f1bd04b5e8c1fc88d8471e28289ff13</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/c7af9a5383b959cff7016bee318599d84f119daa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/44397839965" target="_blank">2026-11-18 21:05:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18700" onclick="CopyToClipboard('tag18700');return false;" class="tag-decoration">release</div><div id="tag14352" onclick="CopyToClipboard('tag14352');return false;" class="tag-decoration">release-40a6750</div><div id="tag11515" onclick="CopyToClipboard('tag11515');return false;" class="tag-decoration">release-5.1.3</div><div id="tag22314" onclick="CopyToClipboard('tag22314');return false;" class="tag-decoration">release-v5</div><div id="tag29080" onclick="CopyToClipboard('tag29080');return false;" class="tag-decoration">release-v5.1</div><div id="tag24144" onclick="CopyToClipboard('tag24144');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/40a675030eb0baedfcf0f588b17c337610d281be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42325022471" target="_blank">2026-11-07 01:37:02</a></td></tr>
<tr><td><div id="tag25414" onclick="CopyToClipboard('tag25414');return false;" class="tag-decoration">testing</div><div id="tag4435" onclick="CopyToClipboard('tag4435');return false;" class="tag-decoration">testing-4e192d8</div><div id="tag10217" onclick="CopyToClipboard('tag10217');return false;" class="tag-decoration">testing-5.2.0RC2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4e192d871748c3fcd096dac8c789091f6d22f70b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/43473428686" target="_blank">2026-11-13 17:30:13</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
