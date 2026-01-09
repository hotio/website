---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/nzbhydra2/tags){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18426" onclick="CopyToClipboard('tag18426');return false;" class="tag-decoration">release</div><div id="tag23755" onclick="CopyToClipboard('tag23755');return false;" class="tag-decoration">release-8.2.1</div><div id="tag3123" onclick="CopyToClipboard('tag3123');return false;" class="tag-decoration">release-ea35e70</div><div id="tag12947" onclick="CopyToClipboard('tag12947');return false;" class="tag-decoration">release-v8</div><div id="tag4265" onclick="CopyToClipboard('tag4265');return false;" class="tag-decoration">release-v8.2</div><div id="tag6984" onclick="CopyToClipboard('tag6984');return false;" class="tag-decoration">release-v8.2.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/ea35e70ba67313111c697ebdc596f22d5a6d64d4" target="_blank">Upstream update: noblevpn-5c07a3a => noblevpn-d932ed0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20850337824" target="_blank">2026-01-09 11:22:57</a></td></tr>
<tr><td><div id="tag23762" onclick="CopyToClipboard('tag23762');return false;" class="tag-decoration">testing</div><div id="tag29939" onclick="CopyToClipboard('tag29939');return false;" class="tag-decoration">testing-8.2.1</div><div id="tag5140" onclick="CopyToClipboard('tag5140');return false;" class="tag-decoration">testing-253bb03</div><div id="tag31108" onclick="CopyToClipboard('tag31108');return false;" class="tag-decoration">testing-v8</div><div id="tag29131" onclick="CopyToClipboard('tag29131');return false;" class="tag-decoration">testing-v8.2</div><div id="tag19227" onclick="CopyToClipboard('tag19227');return false;" class="tag-decoration">testing-v8.2.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/253bb03e91af68205a6cf04ec8097fb5f41050da" target="_blank">Upstream update: noblevpn-d461e72 => noblevpn-5c07a3a</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20845760286" target="_blank">2026-01-09 08:22:16</a></td></tr>
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
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

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
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
